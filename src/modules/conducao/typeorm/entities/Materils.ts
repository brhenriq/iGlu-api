import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('materils')

class Materils{
  @PrimaryGeneratedColumn()
  id:string

  @Column()
  name:string

  @Column()
  condutity: number
}
export default Materils;