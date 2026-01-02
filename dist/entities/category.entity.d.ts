import { News } from './news.entity';
export declare class Category {
    id: number;
    name_en: string;
    name_bn: string;
    slug: string;
    order: number;
    show_in_menu: boolean;
    news: News[];
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}
