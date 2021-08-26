import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CriarForro1629504778370 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'forro',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'material_id',
                    type: 'int'
                },
                {
                    name: 'espessura',
                    type: 'decimal',
                    scale: 3
                }
            ]
        }));

        await queryRunner.createForeignKey('forro', new TableForeignKey({
            name: 'MaterialForro',
            columnNames: ['material_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'material'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('forro', 'MaterialForro');
        await queryRunner.dropTable('forro');
    }

}
