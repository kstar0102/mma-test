import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column('date')
    date: Date;
}