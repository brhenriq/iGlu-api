import {MigrationInterface, QueryRunner} from "typeorm";

export class PopulandoEquipamentos1631050062584 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
            .manager
            .createQueryBuilder()
            .insert()
            .into('equipamentos')
            .values([
                { nome: "Computador ", potencia: 75 },
                { nome: "Monitor Pequeno", potencia: 55 },
                { nome: "Monitor Médio", potencia: 70 },
                { nome: "Monitor Grande", potencia: 80 },
                { nome: "Impressora de mesa,pequena", potencia: 215 },
                { nome: "Impressora de escritório,pequena", potencia: 320 },
                { nome: "Impressora de escritório,grande", potencia: 550 },
                { nome: "Copiadoras Grande", potencia: 1100 },
                { nome: "Maquina de Café", potencia: 1660 },
                { nome: "Bebedouro", potencia: 1400 },
                { nome: "Micro-ondas", potencia: 2600 },
                { nome: "Torradeira", potencia: 5300 },
                { nome: "Geladeira", potencia: 170 },
                { nome: "Aparelho de som", potencia: 100 },
                { nome: "TV", potencia: 180 },
            ])
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
