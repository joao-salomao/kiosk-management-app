import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Transform } from "class-transformer";
import { Log } from "./Log";

@Entity({ name: "kiosks" })
export class Kiosk {
  @PrimaryGeneratedColumn()
  @Transform(({ value }) => value.toString())
  id: number;

  @Column()
  serialKey: string;

  @Column()
  description: string;

  @Column()
  isKioskClosed: boolean;

  @Column({ type: "time" })
  storeOpensAt: string;

  @Column({ type: "time" })
  storeClosesAt: string;

  @OneToMany(() => Log, (log) => log.kiosk)
  logs: Log[];
}
