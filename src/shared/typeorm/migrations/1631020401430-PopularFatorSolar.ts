import {MigrationInterface, QueryRunner} from "typeorm";

export class PopularFatorSolar1631020401430 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager
          .createQueryBuilder()
          .insert()
          .into("fator_solar")
          .values([
            { id: 1 , latitude: "0",  orientacao: "S",  fator_solar: 35 },
            { id: 2 , latitude: "0",  orientacao: "SE", fator_solar: 35 },
            { id: 3 , latitude: "0",  orientacao: "E",  fator_solar: 35 },
            { id: 4 , latitude: "0",  orientacao: "NE", fator_solar: 35 },
            { id: 5 , latitude: "0",  orientacao: "N",  fator_solar: 35 },
            { id: 6 , latitude: "0",  orientacao: "NO", fator_solar: 273 },
            { id: 7 , latitude: "0",  orientacao: "O",  fator_solar: 409 },
            { id: 8 , latitude: "0",  orientacao: "SO", fator_solar: 273 },
            { id: 9 , latitude: "10", orientacao: "S",  fator_solar: 35 },
            { id: 10 , latitude: "10", orientacao: "SE", fator_solar: 35 },
            { id: 11 , latitude: "10", orientacao: "E",  fator_solar: 35 },
            { id: 12 , latitude: "10", orientacao: "NE", fator_solar: 35 },
            { id: 13 , latitude: "10", orientacao: "N",  fator_solar: 51 },
            { id: 14 , latitude: "10", orientacao: "NO", fator_solar: 330 },
            { id: 15 , latitude: "10", orientacao: "O",  fator_solar: 409 },
            { id: 16 , latitude: "10", orientacao: "SO", fator_solar: 217 },
            { id: 17 , latitude: "20", orientacao: "S",  fator_solar: 35 },
            { id: 18 , latitude: "20", orientacao: "SE", fator_solar: 35 },
            { id: 19 , latitude: "20", orientacao: "E",  fator_solar: 35 },
            { id: 20 , latitude: "20", orientacao: "NE", fator_solar: 35 },
            { id: 21 , latitude: "20", orientacao: "N",  fator_solar: 103 },
            { id: 22 , latitude: "20", orientacao: "NO", fator_solar: 379 },
            { id: 23 , latitude: "20", orientacao: "O",  fator_solar: 404 },
            { id: 24 , latitude: "20", orientacao: "SO", fator_solar: 160 },
            { id: 25 , latitude: "30", orientacao: "S",  fator_solar: 32 },
            { id: 26 , latitude: "30", orientacao: "SE", fator_solar: 32 },
            { id: 27 , latitude: "30", orientacao: "E",  fator_solar: 32 },
            { id: 28 , latitude: "30", orientacao: "NE", fator_solar: 32 },
            { id: 29 , latitude: "30", orientacao: "N",  fator_solar: 162 },
            { id: 30 , latitude: "30", orientacao: "NO", fator_solar: 412 },
            { id: 31 , latitude: "30", orientacao: "O",  fator_solar: 390 },
            { id: 32 , latitude: "30", orientacao: "SO", fator_solar: 108 },
          ])
          .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.clearTable("fator_solar");
    }

}
