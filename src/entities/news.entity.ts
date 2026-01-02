import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Category } from './category.entity';

@Entity('news')
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 500 })
  title_en: string;

  @Column({ type: 'varchar', length: 500 })
  title_bn: string;

  @Column({ type: 'text' })
  content_en: string;

  @Column({ type: 'text' })
  content_bn: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  image: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  video_url: string;

  @Column({ default: false })
  is_breaking: boolean;

  @Column({ default: false })
  is_featured: boolean;

  @Column({ default: false })
  is_trending: boolean;

  @Column({ default: 0 })
  views: number;

  @ManyToOne(() => Category, category => category.news)
  category: Category;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
