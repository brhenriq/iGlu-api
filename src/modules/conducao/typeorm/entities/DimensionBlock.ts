import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Typeblock from "./Typeblock";

@Entity('dimension_block')
class DimensionBlock {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Typeblock, typeblock => typeblock.dimension_block)
  @JoinColumn({ name: 'id_typeblock' })
  type_block: Typeblock;

  @Column()
  largura: number;

  @Column()
  comprimento: number;

  @Column()
  altura: number;

  @Column()
  car_orientation: number;

  @Column()
  car_altura: number;

  @Column()
  car_largura: number;
}

export default DimensionBlock;