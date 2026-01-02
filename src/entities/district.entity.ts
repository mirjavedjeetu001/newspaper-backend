import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity('districts')
export class District {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_en: string;

  @Column()
  name_bn: string;

  @Column({ unique: true })
  code: string; // DHK, CTG, RAJ, etc.

  @Column({ default: true })
  is_active: boolean;

  @OneToMany(() => User, user => user.district)
  users: User[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
