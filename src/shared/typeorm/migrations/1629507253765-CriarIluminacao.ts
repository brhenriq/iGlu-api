import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarIluminacao1629507253765 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'iluminacao',
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
                    name: 'potencia',
                    type: 'decimal',
                    scale: 3
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('iluminacao');
    }

}
