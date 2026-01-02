import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('menus')
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  title_en: string;

  @Column({ type: 'varchar', length: 200 })
  title_bn: string;

  @Column({ type: 'varchar', length: 500 })
  url: string;

  @Column({ type: 'varchar', length: 50, default: 'header' })
  location: string; // header, footer, both

  @Column({ default: 0 })
  order: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  icon: string;

  @Column({ nullable: true })
  parent_id: number;

  @Column({ default: true })
  is_active: boolean;

  @Column({ default: false })
  open_new_tab: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
