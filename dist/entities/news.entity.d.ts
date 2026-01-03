import { Category } from './category.entity';
export declare class News {
    id: number;
    title_en: string;
    title_bn: string;
    slug: string;
    content_en: string;
    content_bn: string;
    image: string;
    video_url: string;
    is_breaking: boolean;
    is_featured: boolean;
    is_trending: boolean;
    views: number;
    author_name: string;
    category: Category;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}
