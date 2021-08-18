import {Entity, Column, PrimaryGeneratedColumn, OneToOne} from 'typeorm'
import Typeblock from './Typeblock';

@Entity('materials')
class Material {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  conductivity: number;

  // @OneToOne(() => Typeblock, typeblock => typeblock.material)
  // typeblock: Typeblock;
}

export default Material;