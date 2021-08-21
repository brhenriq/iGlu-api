import Material from './Material';
import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm'

@Entity('forro')
class Forro {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Material)
  @JoinColumn({ name: 'material_id'})
  material: Material;

  @Column()
  espessura: number;
}

export default Forro;