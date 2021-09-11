import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CriarBloco1629508465855 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "bloco",
            columns: [
              {
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment",
              },
              {
                name: "material_id",
                type: "int",
              },
              {
                name: "altura",
                type: "decimal",
                scale: 3,
              },
              {
                name: "largura",
                type: "decimal",
                scale: 3,
              },
              {
                name: "comprimento",
                type: "decimal",
                scale: 3,
              },
            ],
          })
        );

        await queryRunner.createForeignKey(
          "bloco",
          new TableForeignKey({
            name: "MaterialBloco",
            columnNames: ["material_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "material",
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('bloco', 'MaterialBloco');
        await queryRunner.dropTable('bloco');
    }

}
