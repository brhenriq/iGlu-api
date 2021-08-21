import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm'
import Material from './Material';
import Modelo from './Modelo';

@Entity('telha')
class Telha {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Material)
  @JoinColumn({ name: 'material_id'})
  material: Material;

  @OneToOne(() => Modelo)
  @JoinColumn({ name: 'modelo_id'})
  modelo: Modelo;
}

export default Telha;