import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateDimensionBlock1629243600572 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'dimension_block',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'id_typeblock',
                    type: 'uuid'
                },
                {
                    name: 'largura',
                    type: 'decimal',
                    scale: 3
                },
                {
                    name: 'comprimento',
                    type: 'decimal',
                    scale: 3
                },
                {
                    name: 'altura',
                    type: 'decimal',
                    scale: 3
                },
                {
                    name: 'car_orientation',
                    type: 'varchar'
                },
                {
                    name: 'car_altura',
                    type: 'decimal',
                    scale: 3
                },
                {
                    name: 'car_largura',
                    type: 'decimal',
                    scale: 3
                }
            ],
        }));

        await queryRunner.createForeignKey('dimension_block', new TableForeignKey({
            name: 'DimensionBlock_TypeBlock',
            columnNames: ['id_typeblock'],
            referencedColumnNames: ['id'],
            referencedTableName: 'type_block'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('dimension_block', 'DimensionBlock_TypeBlock');
        await queryRunner.dropTable('dimension_block');
    }

}
