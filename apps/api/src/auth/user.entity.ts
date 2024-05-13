import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kakaoId: number;

  @Column()
  username: string;

  @Column()
  gender: string;

  @Column()
  age: number;

  @Column()
  weight: number;

  @Column()
  height: number;

  @Column()
  goal: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
