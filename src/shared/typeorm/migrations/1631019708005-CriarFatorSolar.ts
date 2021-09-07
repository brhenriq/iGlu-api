import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarFatorSolar1631019708005 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "fator_solar",
            columns: [
              {
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment",
              },
              {
                name: "latitude",
                type: "varchar",
              },
              {
                name: "orientacao",
                type: "varchar",
              },
              {
                name: "fator_solar",
                type: "int",
              },
            ],
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("fator_solar");
    }

}
