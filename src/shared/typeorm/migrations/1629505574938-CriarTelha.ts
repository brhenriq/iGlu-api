import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CriarTelha1629505574938 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "telha",
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
                isNullable: true,
              },
              {
                name: "espessura",
                type: "decimal",
                scale: 3,
              },
            ],
          })
        );

        await queryRunner.createForeignKey('telha', new TableForeignKey({
            name: 'MaterialTelha',
            columnNames: ['material_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'material',
            onDelete: 'SET NULL'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('telha', 'MaterialTelha');
        await queryRunner.dropTable('telha');
    }

}
