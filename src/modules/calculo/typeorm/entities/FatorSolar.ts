import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("fator_solar")
class FatorSolar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  latitude: string;

  @Column()
  orientacao: string;

  @Column()
  fator_solar: number;
}

export default FatorSolar;
