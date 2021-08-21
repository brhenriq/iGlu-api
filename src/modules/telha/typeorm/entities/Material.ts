import {Entity, Column, PrimaryGeneratedColumn, OneToOne} from 'typeorm'

@Entity('material')
class Material {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  condutividade: number;
}

export default Material;