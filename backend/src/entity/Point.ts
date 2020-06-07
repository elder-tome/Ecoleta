import {Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany} from "typeorm";
import Item from "./Item";

@Entity()
class Point{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    name: string;
    
    @Column()
    email: string;
    
    @Column()
    whatsapp: string;
    
    @Column({
      type: "decimal"
    })
    latitude: number
    
    @Column({
      type: "decimal"
    })
    longitude: number;
    
    @Column()
    city: string;

    @Column({
      length: 2
    })
    uf: string;

    @ManyToMany(type => Item, item => item.point, {
      // cascade: true
    })
    @JoinTable({ name:'point_item' })
    item: Item[];
    
  }
  
  export default Point;