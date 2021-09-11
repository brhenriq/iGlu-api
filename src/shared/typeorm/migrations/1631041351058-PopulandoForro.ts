import {MigrationInterface, QueryRunner} from "typeorm";

export class PopulandoForro1631041351058 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        "INSERT INTO forro(material_id, espessura) " +
          "VALUES" +
          "(31, 0.02)," +
          "(14, 0.05)," +
          "(14, 0.025)," +
          "(5, 0.02)," +
          "(7, 0.2)," +
          "(7, 0.1)," +
          "(7, 0.15)," +
          "(7, 0.3)"
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
