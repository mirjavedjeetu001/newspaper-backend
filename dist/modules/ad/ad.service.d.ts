import { Repository } from 'typeorm';
import { Ad } from '../../entities/ad.entity';
export declare class AdService {
    private adRepository;
    constructor(adRepository: Repository<Ad>);
    findAll(): Promise<Ad[]>;
    findByPosition(position: string): Promise<Ad[]>;
    findOne(id: number): Promise<Ad | null>;
    create(adData: Partial<Ad>): Promise<Ad>;
    update(id: number, adData: Partial<Ad>): Promise<Ad | null>;
    delete(id: number): Promise<void>;
}
