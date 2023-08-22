import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Fighter } from "./fighter.entity";

@Entity()
export class Ranking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    weight_class: string;

    @OneToMany(() => Fighter, fighter => fighter.id)
    fighter_id: Fighter[];

    @Column('int')
    rank: number;
}