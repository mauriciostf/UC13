import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { OrderItem } from "./OrderItem";
import { User } from "./User";
import { favoriteDish } from "./FavoritDish";

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  name: string;

  @Column({type: "text"})
  description: string;

  @Column("decimal", { precision: 5, scale: 2 })
  price: number;

  @Column({ default: true })
  available: boolean;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.dish)
  orderItems!: OrderItem[];

  @OneToMany(() => favoriteDish, (favoriteDishes) => favoriteDishes.dish)
  favoriteDishes!: favoriteDish[];

constructor(name: string, description: string, price: number, available: boolean){
    this.name = name;
    this.description = description;
    this.price = price;
    this.available = available
}
}