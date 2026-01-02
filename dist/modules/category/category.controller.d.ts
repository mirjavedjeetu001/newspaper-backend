import { CategoryService } from './category.service';
import { Category } from '../../entities/category.entity';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category | null>;
    findBySlug(slug: string): Promise<Category | null>;
    create(categoryData: Partial<Category>): Promise<Category>;
    update(id: string, categoryData: Partial<Category>): Promise<Category | null>;
    delete(id: string): Promise<void>;
}
