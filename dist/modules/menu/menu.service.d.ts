import { Repository } from 'typeorm';
import { Menu } from '../../entities/menu.entity';
export declare class MenuService {
    private menuRepository;
    constructor(menuRepository: Repository<Menu>);
    findAll(): Promise<Menu[]>;
    findByLocation(location: string): Promise<Menu[]>;
    findOne(id: number): Promise<Menu | null>;
    create(data: Partial<Menu>): Promise<Menu>;
    update(id: number, data: Partial<Menu>): Promise<Menu | null>;
    delete(id: number): Promise<void>;
}
