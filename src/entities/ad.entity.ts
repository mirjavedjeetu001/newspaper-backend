import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('ads')
export class Ad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  title: string;

  @Column({ type: 'varchar', length: 500 })
  image_url: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  link_url: string;

  @Column({ type: 'varchar', length: 100 })
  position: string; // header, sidebar, footer, between-news

  @Column({ default: 0 })
  order: number;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
