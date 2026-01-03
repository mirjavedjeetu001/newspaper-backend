import { NewsService } from './news.service';
import { News } from '../../entities/news.entity';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    findAll(): Promise<News[]>;
    findBreaking(): Promise<News[]>;
    findFeatured(): Promise<News[]>;
    findTrending(): Promise<News[]>;
    findByCategory(categoryId: string): Promise<News[]>;
    findBySlug(slug: string): Promise<News | null>;
    findOne(id: string): Promise<News | null>;
    create(newsData: Partial<News>): Promise<News>;
    update(id: string, newsData: Partial<News>): Promise<News | null>;
    delete(id: string): Promise<void>;
}
