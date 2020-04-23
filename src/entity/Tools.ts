import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tools {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  description: string;

  @Column({ array: true })
  tags: string;
}
