import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Order } from "./Order";
import { Dish } from "./Dish";
import { favoriteDish } from "./FavoritDish";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: "customer" })
  role!: string;

  @Column({length:15})
  phone: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => favoriteDish, (favoriteDishes) => favoriteDishes.user)
  favoriteDishes!: favoriteDish[];

  constructor(name: string, email: string, password: string, orders: Order[], phone: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.orders = orders
    this.phone = phone
  }
}