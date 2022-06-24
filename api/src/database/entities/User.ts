import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Transform } from "class-transformer";
import { Log } from "./Log";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  @Transform(({ value }) => value.toString())
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Log, (log) => log.user)
  logs: Log[];
}
