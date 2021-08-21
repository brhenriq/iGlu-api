import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('modelo_bloco')
class Modelo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  altura: number;

  @Column()
  largura: number;

  @Column()
  comprimento: number;
}

export default Modelo;