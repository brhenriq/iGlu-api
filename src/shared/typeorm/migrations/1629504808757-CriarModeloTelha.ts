import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarModeloTelha1629504808757 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'modelo_telha',
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
                    name: 'largura',
                    type: 'decimal',
                    scale: 3
                },
                {
                    name: 'espessura',
                    type: 'decimal',
                    scale: 3
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('modelo_telha');
    }

}
