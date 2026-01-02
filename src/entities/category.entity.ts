import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { News } from './news.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  name_en: string;

  @Column({ type: 'varchar', length: 200 })
  name_bn: string;

  @Column({ type: 'varchar', length: 200, unique: true })
  slug: string;

  @Column({ default: 0 })
  order: number;

  @Column({ default: true })
  show_in_menu: boolean;

  @OneToMany(() => News, news => news.category)
  news: News[];

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
