import { Column, Entity,JoinColumn,OneToMany,OneToOne,PrimaryGeneratedColumn} from "typeorm";
import Dimetrics from './Dimetricsblock'
import Materils from "./Materils";

@Entity('type_block')

class Typeblock{

  @PrimaryGeneratedColumn()
  id:string;
  
  @Column()
  name:string

  @OneToMany(()=> Dimetrics, dimetrics => dimetrics.type_block)
  @JoinColumn({name: 'dimetrics_id'})
  dimetrics: Dimetrics[];

  
  @OneToOne(() => Materils)
  @JoinColumn({name: 'materils_id'})
  materils: Materils;
}

export default Typeblock;