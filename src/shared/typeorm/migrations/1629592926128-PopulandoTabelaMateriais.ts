import {MigrationInterface, QueryRunner} from "typeorm";

export class PopulandoTabelaMateriais1629592926128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
            .manager
            .createQueryBuilder()
            .insert()
            .into('material')
            .values([
                { nome: 'Argamassa Comum', condutividade: 1.15 },
                { nome: 'Argamassa de Gesso', condutividade: 0.7 },
                { nome: 'Argamassa Celular', condutividade: 0.4 },
                { nome: 'Cerâmica', condutividade: 0.9 },
                { nome: 'Gesso', condutividade: 0.5 },
                { nome: 'Fibro-cimento', condutividade: 0.65 },
                { nome: 'Concreto Normal', condutividade: 1.75 },
                { nome: 'Concreto Cavernoso', condutividade: 1.4 },
                { nome: 'Brita', condutividade: 0.7 },
                { nome: 'Areia Seca', condutividade: 0.3 },
                { nome: 'Areia Saturada', condutividade: 1.88 },
                { nome: 'Areia (10% umidade)', condutividade: 0.93 },
                { nome: 'Areia (20% umidade)', condutividade: 1.33 },
                { nome: 'Lã de vidro', condutividade: 0.045 },
                { nome: 'Lã de rocha', condutividade: 0.045 },
                { nome: 'Poliestireno expandido moldado', condutividade: 0.04 },
                { nome: 'Poliestireno estrudado', condutividade: 0.035 },
                { nome: 'Espuma rígida de poliuretano', condutividade: 0.03 },
                { nome: 'Borrachas Sinteticas', condutividade: 0.4 },
                { nome: 'Acrilicos', condutividade: 0.2 },
                { nome: 'Vidro Comum', condutividade: 1 },
                { nome: 'Aço', condutividade: 55 },
                { nome: 'Aluminio', condutividade: 230 },
                { nome: 'Cobre', condutividade: 380 },
                { nome: 'Zinco', condutividade: 112 },
                { nome: 'Madeiras massa aparente elevada', condutividade: 0.29 },
                { nome: 'Carvalho', condutividade: 0.23 },
                { nome: 'Freijó', condutividade: 0.23 },
                { nome: 'Pinho', condutividade: 0.23 },
                { nome: 'Cedro', condutividade: 0.23 },
                { nome: 'Pinus', condutividade: 0.23 },
                { nome: 'Aglomerado fibras denso (madeira)', condutividade: 0.2 },
                { nome: 'Aglomerado fibras leve (madeira)', condutividade: 0.058 },
                { nome: 'Aglomerado particulas (madeira)', condutividade: 0.17 },
                { nome: 'Placas prensadas (madeira)', condutividade: 0.12 },
                { nome: 'Placas extrudadas (madeira)', condutividade: 0.16 },
                { nome: 'Compensado (madeira)', condutividade: 0.15 }
            ])
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.clearTable('material');
    }

}
