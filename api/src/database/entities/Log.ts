import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Transform } from "class-transformer";
import { Kiosk } from "./Kiosk";
import { User } from "./User";

@Entity({ name: "logs" })
export class Log {
  @PrimaryGeneratedColumn()
  @Transform(({ value }) => value.toString())
  id: number;

  @Column()
  action: string;

  @Column()
  description: string;

  @Column()
  kioskId: number;

  @Column()
  userId: number;

  @ManyToOne(() => Kiosk, (kiosk) => kiosk.logs)
  kiosk: Kiosk;

  @ManyToOne(() => User, (user) => user.logs)
  user: User;
}
