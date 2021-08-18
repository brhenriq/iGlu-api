import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTypeBlock1629243176568 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'type_block',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'id_materials',
                    type: 'uuid'
                },
                {
                    name: 'name',
                    type: 'varchar'
                }
            ],
        }));

        await queryRunner.createForeignKey('type_block', new TableForeignKey({
            name: 'TypeBlock_Materials',
            columnNames: ['id_materials'],
            referencedColumnNames: ['id'],
            referencedTableName: 'materials'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('type_block', 'TypeBlock_Materials');
        await queryRunner.dropTable('type_block');
    }

}
