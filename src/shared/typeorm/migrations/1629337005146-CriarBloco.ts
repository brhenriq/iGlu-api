import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CriarBloco1629337005146 implements MigrationInterface {

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
                    name: 'nome',
                    type: 'varchar'
                },
                {
                    name: 'altura',
                    type: 'decimal',
                    scale: 3
                },
                {
                    name: 'comprimento',
                    type: 'decimal',
                    scale: 3
                },
                {
                    name: 'largura',
                    type: 'decimal',
                    scale: 3
                },
                {
                    name: 'id_material',
                    type: 'uuid'
                }
            ],
        }));

        await queryRunner.createForeignKey('bloco', new TableForeignKey({
            name: 'Material_Bloco',
            columnNames: ['id_material'],
            referencedColumnNames: ['id'],
            referencedTableName: 'materials'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('bloco', 'Material_Bloco');
        await queryRunner.dropTable('bloco');
    }

}
