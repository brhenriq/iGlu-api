import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import DimensionBlock from "./DimensionBlock";
import Material from "./Material";

@Entity('type_block')
class Typeblock{

  @PrimaryGeneratedColumn('uuid')
  id:string;
  
  @Column()
  name: string;

  @OneToMany(() => DimensionBlock, dimensionBlock => dimensionBlock.type_block)
  dimension_block: DimensionBlock[];
  
  @OneToOne(() => Material)
  @JoinColumn({ name: 'id_materials'})
  material: Material;
}

export default Typeblock;