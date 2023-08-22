import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Fighter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  weight_class: string;

  @Column()
  nationality: string;

  @Column()
  team: string;

  @Column('int')
  wins: number;

  @Column('int')
  losses: number;

  @Column('int')
  knockouts: number;

  @Column('int')
  submissions: number;
}