import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: false,
  logging: true,
  entities: ["src/database/entities/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
  subscribers: [],
});
