import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'meal' })
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  date: Date;

  @Column()
  category: string;

  @Column({ nullable: true, default: null })
  calories: number;

  @Column({ nullable: true, default: null })
  carbs: number;

  @Column({ nullable: true, default: null })
  protein: number;

  @Column({ nullable: true, default: null })
  fat: number;

  @Column({ nullable: true, default: null })
  image: string;

  @Column({ length: 10, nullable: true, default: null })
  rating: string;

  @Column({ nullable: true, default: null })
  review: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
