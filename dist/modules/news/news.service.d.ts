import { Repository } from 'typeorm';
import { News } from '../../entities/news.entity';
export declare class NewsService {
    private newsRepository;
    constructor(newsRepository: Repository<News>);
    findAll(): Promise<News[]>;
    findBreaking(): Promise<News[]>;
    findFeatured(): Promise<News[]>;
    findTrending(): Promise<News[]>;
    findByCategory(categoryId: number): Promise<News[]>;
    findOne(id: number): Promise<News | null>;
    findBySlug(slug: string): Promise<News | null>;
    create(newsData: Partial<News>): Promise<News>;
    update(id: number, newsData: Partial<News>): Promise<News | null>;
    delete(id: number): Promise<void>;
}
