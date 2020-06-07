import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import Point from './Point';

@Entity()
class Item{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    title: string;

    @ManyToMany(type => Point, point => point.item)
    point: Point[];

}

export default Item;