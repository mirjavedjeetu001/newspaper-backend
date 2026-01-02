import { MenuService } from './menu.service';
import { Menu } from '../../entities/menu.entity';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    findAll(location?: string): Promise<Menu[]>;
    findOne(id: string): Promise<Menu | null>;
    create(data: Partial<Menu>): Promise<Menu>;
    update(id: string, data: Partial<Menu>): Promise<Menu | null>;
    delete(id: string): Promise<void>;
}
