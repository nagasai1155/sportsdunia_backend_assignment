import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('colleges')
export class College {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  score: number;

  @Column()
  city_id: number;

  @Column()
  state_id: number;
}
