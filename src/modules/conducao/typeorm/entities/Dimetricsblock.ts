import { Column, Entity,ManyToOne,OneToOne,PrimaryGeneratedColumn} from "typeorm";
import Typeblock from "./Typeblock";


@Entity('dimetrics')
class Dimetrics{
@PrimaryGeneratedColumn()
id: string;

@ManyToOne(() => Typeblock, typeblock => typeblock.dimetrics)
type_block : Typeblock;

@Column()
width: number;

@Column()
length: number;

@Column()
height: number;

@Column()
oriention_Car: number;

@Column()
height_Car: number;

@Column()
widht_Car: number;


}

export default Dimetrics;