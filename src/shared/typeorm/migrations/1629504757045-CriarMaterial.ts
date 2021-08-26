import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarMaterial1629504757045 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'material',
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
                    name: 'condutividade',
                    type: 'decimal',
                    scale: 3
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('material');
    }

}
