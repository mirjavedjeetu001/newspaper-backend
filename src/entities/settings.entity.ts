import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('settings')
export class Settings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  site_name_en: string;

  @Column()
  site_name_bn: string;

  @Column({ nullable: true })
  logo_url: string;

  @Column({ nullable: true })
  favicon_url: string;

  @Column({ type: 'text', nullable: true })
  description_en: string;

  @Column({ type: 'text', nullable: true })
  description_bn: string;

  @Column({ nullable: true })
  contact_email: string;

  @Column({ nullable: true })
  contact_phone: string;

  @Column({ nullable: true })
  address_en: string;

  @Column({ nullable: true })
  address_bn: string;

  @Column({ nullable: true })
  facebook_url: string;

  @Column({ nullable: true })
  twitter_url: string;

  @Column({ nullable: true })
  youtube_url: string;

  @Column({ nullable: true })
  instagram_url: string;

  @Column({ default: '#c8102e' })
  theme_color: string;

  @Column({ type: 'text', nullable: true })
  footer_about_en: string;

  @Column({ type: 'text', nullable: true })
  footer_about_bn: string;

  @Column({ type: 'text', nullable: true })
  footer_links: string;
}
