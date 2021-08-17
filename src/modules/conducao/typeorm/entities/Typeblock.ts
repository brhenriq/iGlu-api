import { Column, Entity,JoinColumn,JoinTable,OneToMany,OneToOne,PrimaryGeneratedColumn} from "typeorm";
import Dimetrics from './Dimetricsblock'
import Materils from "./Materils";

@Entity('type_block')

class Typeblock{

  @PrimaryGeneratedColumn()
  id:string;
  
  @Column()
  name:string
// Tirar id dimensão
  @OneToMany(()=> Dimetrics, dimetrics => dimetrics.type_block)
  dimetrics: Dimetrics[];

  
  @OneToOne(() => Materils)
  @JoinTable({name: 'materils_id'})
  materils: Materils;
}

export default Typeblock;