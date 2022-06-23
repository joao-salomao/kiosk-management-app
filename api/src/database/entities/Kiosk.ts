import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "kiosks" })
export class Kiosk {
  @PrimaryGeneratedColumn()
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
