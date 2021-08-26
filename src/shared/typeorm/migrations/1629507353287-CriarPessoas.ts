import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarPessoas1629507353287 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'pessoas',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'nivel',
                    type: 'varchar'
                },
                {
                    name: 'local',
                    type: 'varchar'
                },
                {
                    name: 'calor',
                    type: 'decimal',
                    scale: 3
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pessoas');
    }

}
