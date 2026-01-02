import { Repository } from 'typeorm';
import { Category } from '../../entities/category.entity';
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category | null>;
    findBySlug(slug: string): Promise<Category | null>;
    create(categoryData: Partial<Category>): Promise<Category>;
    update(id: number, categoryData: Partial<Category>): Promise<Category | null>;
    delete(id: number): Promise<void>;
}
