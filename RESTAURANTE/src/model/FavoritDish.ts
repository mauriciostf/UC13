import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class favoriteDish {
    @PrimaryGeneratedColumn()
    id!: number;
}