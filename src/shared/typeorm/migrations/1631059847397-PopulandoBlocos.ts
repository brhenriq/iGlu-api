import {MigrationInterface, QueryRunner} from "typeorm";

export class PopulandoBlocos1631059847397 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          "INSERT INTO bloco(material_id, altura, largura, comprimento) " +
            "VALUES" +
            "(4, 0.19, 0.07, 0.39)," +
            "(4, 0.19, 0.09, 0.29)," +
            "(4, 0.19, 0.09, 0.39)," +
            "(4, 0.19, 0.115, 0.39)," +
            "(4, 0.19, 0.14, 0.29)," +
            "(4, 0.19, 0.14, 0.39)," +
            "(4, 0.19, 0.19, 0.39)," +
            "(4, 0.24, 0.24, 0.39)," +
            "(7, 0.19, 0.07, 0.39)," +
            "(7, 0.19, 0.09, 0.29)," +
            "(7, 0.19, 0.09, 0.39)," +
            "(7, 0.19, 0.115, 0.39)," +
            "(7, 0.19, 0.14, 0.29)," +
            "(7, 0.19, 0.14, 0.39)," +
            "(7, 0.19, 0.19, 0.39)," +
            "(7, 0.24, 0.24, 0.39)"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
