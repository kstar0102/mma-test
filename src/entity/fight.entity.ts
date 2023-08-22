import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany, ManyToOne, OneToOne } from "typeorm";
import { Event } from "./event.entity";
import { Fighter } from "./fighter.entity";

@Entity()
export class Fight {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Event)
    @JoinColumn()
    event_id: Event;

    @ManyToOne(() => Fighter)
    fighter1_id: Fighter;

    @ManyToOne(() => Fighter)
    fighter2_id: Fighter;

    @ManyToOne(() => Fighter)
    winner_id: Fighter;
}