import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm'
import Material from './Material';

@Entity("telha")
class Telha {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => Material)
  @JoinColumn({ name: "material_id" })
  material: Material;

  @Column()
  espessura: number;
}

export default Telha;