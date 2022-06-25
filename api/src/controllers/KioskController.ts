import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from "routing-controllers";
import { Repository } from "typeorm";
import { AppDataSource } from "../database/data-source";
import { Kiosk } from "../database/entities/Kiosk";
import { User } from "../database/entities/User";
import { Log } from "../database/entities/Log";

@JsonController()
export class KioskController {
  private kioskRepository: Repository<Kiosk>;
  private userRepository: Repository<User>;
  private logRepository: Repository<Log>;

  constructor() {
    this.kioskRepository = AppDataSource.getRepository(Kiosk);
    this.userRepository = AppDataSource.getRepository(User);
    this.logRepository = AppDataSource.getRepository(Log);
  }

  @Get("/kiosks")
  getAll() {
    return this.kioskRepository.find();
  }

  @Get("/kiosks/:id")
  getOne(@Param("id") id: number) {
    return this.kioskRepository.findOne({
      where: {
        id,
      },
    });
  }

  @Get("/logs")
  async allLogs() {
    return this.logRepository.find({
      relations: ["user", "kiosk"],
      withDeleted: true,
    });
  }

  @Get("/kiosks/:id/logs")
  async logs(@Param("id") id: number) {
    return this.logRepository.find({
      where: {
        kioskId: id,
      },
      relations: ["user", "kiosk"],
      withDeleted: true,
    });
  }

  @Post("/kiosks")
  async post(@Body() kioskData: Kiosk) {
    const kiosk = this.kioskRepository.create(kioskData);

    await this.kioskRepository.save(kiosk);
    await this.createActionLog(kiosk, "Create kiosk", kiosk, kioskData);

    return { status: "success", message: "Kiosk created" };
  }

  @Put("/kiosks/:id")
  async put(@Param("id") id: number, @Body() kioskData: Omit<Kiosk, "id">) {
    const kiosk = await this.kioskRepository.findOne({
      where: {
        id,
      },
    });

    await this.kioskRepository.update(kiosk.id, kioskData);
    await this.createActionLog(kiosk, "Update kiosk", kiosk, kioskData);

    return { status: "success", message: "Kiosk updated" };
  }

  @Delete("/kiosks/:id")
  async remove(@Param("id") id: number) {
    const kiosk = await this.findKiosk(id);

    await this.kioskRepository.softDelete(id);
    await this.createActionLog(kiosk, "Delete kiosk");

    return { status: "success", message: "Kiosk updated" };
  }

  private findKiosk(id: number): Promise<Kiosk> {
    return this.kioskRepository.findOne({
      where: {
        id,
      },
    });
  }

  private async createActionLog(
    kiosk: Kiosk,
    action: string,
    oldData?: Partial<Omit<Kiosk, "id">>,
    newData?: Partial<Omit<Kiosk, "id">>
  ) {
    const defaultUser = await this.getDefaultUser();

    await this.logRepository.insert({
      kiosk,
      action,
      user: defaultUser,
      description: this.prepareDiffJson(oldData || {}, newData || {}),
    });
  }

  private getDefaultUser(): Promise<User> {
    return this.userRepository.findOne({
      where: {
        name: "João Salomão",
      },
    });
  }

  private prepareDiffJson(
    oldData: Partial<Omit<Kiosk, "id">>,
    newData: Partial<Omit<Kiosk, "id">>
  ): string {
    const uniqueKeys = [
      ...new Set([...Object.keys(oldData), ...Object.keys(newData)]),
    ].filter((key) => !["id", "deletedAt"].includes(key));

    const diffObject: Record<string, any> = {
      from: {},
      to: {},
    };

    uniqueKeys.forEach((key) => {
      const oldValue = oldData[key];
      const newValue = newData[key];

      if (newValue !== oldValue) {
        diffObject["from"][key] = oldValue;
        diffObject["to"][key] = newValue;
      }
    });

    return JSON.stringify(diffObject);
  }
}
