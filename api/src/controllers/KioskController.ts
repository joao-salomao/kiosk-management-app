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

@JsonController()
export class KioskController {
  private repository: Repository<Kiosk>;

  constructor() {
    this.repository = AppDataSource.getRepository(Kiosk);
  }

  @Get("/kiosks")
  getAll() {
    return this.repository.find();
  }

  @Get("/kiosks/:id")
  getOne(@Param("id") id: number) {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }

  @Post("/kiosks")
  post(@Body() kiosk: Omit<Kiosk, "id">) {
    return this.repository.insert(kiosk);
  }

  @Put("/kiosks/:id")
  put(@Param("id") id: number, @Body() kiosk: Omit<Kiosk, "id">) {
    return this.repository.update(id, kiosk);
  }

  @Delete("/kiosks/:id")
  remove(@Param("id") id: number) {
    return this.repository.delete(id);
  }
}
