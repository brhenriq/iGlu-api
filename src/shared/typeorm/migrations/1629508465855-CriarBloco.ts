import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CriarBloco1629508465855 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'bloco',
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

        await queryRunner.createForeignKey('bloco', new TableForeignKey({
            name: 'MaterialBloco',
            columnNames: ['material_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'material'
        }));

        await queryRunner.createForeignKey('bloco', new TableForeignKey({
            name: 'ModeloBloco',
            columnNames: ['modelo_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'modelo_bloco'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('bloco', 'ModeloBloco');
        await queryRunner.dropForeignKey('bloco', 'MaterialBloco');
        await queryRunner.dropTable('bloco');
    }

}
