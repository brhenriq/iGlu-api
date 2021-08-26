import {Entity, Column, PrimaryGeneratedColumn, OneToOne} from 'typeorm'

@Entity('material')
class Material {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  condutividade: number;
}

export default Material;