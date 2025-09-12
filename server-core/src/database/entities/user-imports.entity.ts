import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Entity,
} from 'typeorm';

@Entity('user_imports')
export class UserImportsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file_name: string;

  @Column()
  status: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
