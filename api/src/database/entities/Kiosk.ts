import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Transform } from "class-transformer";

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
}
