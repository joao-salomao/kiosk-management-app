import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateKiosksTableMigration1655955849956
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "kiosks",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "serialKey",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "description",
            type: "text",
            isNullable: false,
          },
          {
            name: "isKioskClosed",
            type: "boolean",
            default: "false",
            isNullable: false,
          },
          {
            name: "storeOpensAt",
            type: "time",
            isNullable: false,
          },
          {
            name: "storeClosesAt",
            type: "time",
            isNullable: false,
          },
          {
            name: "deletedAt",
            type: "timestamp",
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable("kiosks");
  }
}
