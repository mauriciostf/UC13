import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Dish } from "./Dish";

@Entity()
export class favoriteDish {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, (user) => user.favoriteDishes)
    user!: User;

    @ManyToOne(() => Dish, (dish) => dish.favoriteDishes)
    dish!: Dish;
}