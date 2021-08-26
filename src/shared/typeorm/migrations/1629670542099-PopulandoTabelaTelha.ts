import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulandoTabelaTelha1629670542099 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO telha(material_id, espessura) " +
        "VALUES(4, 0.2), (6, 0.4), (6, 0.5), (6, 0.6)"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable("telha");
  }
}
