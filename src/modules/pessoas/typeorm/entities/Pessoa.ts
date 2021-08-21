import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('pessoas')
class Pessoa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nivel: string;

  @Column()
  local: string;

  @Column()
  calor: number;
}

export default Pessoa;