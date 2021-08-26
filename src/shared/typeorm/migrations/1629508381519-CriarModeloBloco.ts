import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarModeloBloco1629508381519 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'modelo_bloco',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
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
                    name: 'largura',
                    type: 'decimal',
                    scale: 3
                },
                {
                    name: 'comprimento',
                    type: 'decimal',
                    scale: 3
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('modelo_bloco');
    }

}
