import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('equipamentos')
class Equipamento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  potencia: number;
}

export default Equipamento;