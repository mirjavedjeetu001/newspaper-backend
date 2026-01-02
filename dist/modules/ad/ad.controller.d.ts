import { AdService } from './ad.service';
import { Ad } from '../../entities/ad.entity';
export declare class AdController {
    private readonly adService;
    constructor(adService: AdService);
    findAll(position?: string): Promise<Ad[]>;
    findOne(id: string): Promise<Ad | null>;
    create(adData: Partial<Ad>): Promise<Ad>;
    update(id: string, adData: Partial<Ad>): Promise<Ad | null>;
    delete(id: string): Promise<void>;
}
