import { Repository } from 'typeorm';
import { District } from '../../entities/district.entity';
export declare class DistrictService {
    private districtRepository;
    constructor(districtRepository: Repository<District>);
    findAll(): Promise<District[]>;
    findActive(): Promise<District[]>;
    findOne(id: number): Promise<District | null>;
    create(districtData: Partial<District>): Promise<District>;
    update(id: number, districtData: Partial<District>): Promise<District | null>;
    delete(id: number): Promise<void>;
}
