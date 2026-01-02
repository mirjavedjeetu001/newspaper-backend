import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { Role } from './role.entity';

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string; // manage_users, manage_news, manage_categories, etc.

  @Column()
  display_name_en: string;

  @Column()
  display_name_bn: string;

  @Column({ nullable: true })
  module: string; // users, news, categories, photos, videos, ads, settings, menus

  @Column({ type: 'text', nullable: true })
  description: string;

  @ManyToMany(() => Role, role => role.permissions)
  @JoinTable({
    name: 'role_permissions',
    joinColumn: { name: 'permission_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' }
  })
  roles: Role[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
