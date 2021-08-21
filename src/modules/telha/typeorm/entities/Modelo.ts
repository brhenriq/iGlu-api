import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('modelo_telha')
class Modelo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  espessura: number;

  @Column()
  largura: number;
}

export default Modelo;