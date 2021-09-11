import {Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column} from 'typeorm'
import Material from './Material';

@Entity("bloco")
class Bloco {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Material)
  @JoinColumn({ name: "material_id" })
  material: Material;

  @Column()
  altura: number;

  @Column()
  largura: number;

  @Column()
  comprimento: number;
}

export default Bloco;