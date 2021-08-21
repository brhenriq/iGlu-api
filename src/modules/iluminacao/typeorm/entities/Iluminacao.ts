import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('iluminacao')
class Iluminacao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  potencia: number;
}

export default Iluminacao;