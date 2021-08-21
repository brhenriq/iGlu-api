import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CriarTelha1629505574938 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'telha',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'material_id',
                    type: 'uuid'
                },
                {
                    name: 'modelo_id',
                    type: 'uuid',
                }
            ]
        }));

        await queryRunner.createForeignKey('telha', new TableForeignKey({
            name: 'MaterialTelha',
            columnNames: ['material_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'material'
        }));

        await queryRunner.createForeignKey('telha', new TableForeignKey({
            name: 'ModeloTelha',
            columnNames: ['modelo_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'modelo_telha'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('telha', 'ModeloTelha');
        await queryRunner.dropForeignKey('telha', 'MaterialTelha');
        await queryRunner.dropTable('telha');
    }

}
