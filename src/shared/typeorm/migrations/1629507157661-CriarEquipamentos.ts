import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarEquipamentos1629507157661 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'equipamentos',
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
        await queryRunner.dropTable('equipamentos');
    }

}
