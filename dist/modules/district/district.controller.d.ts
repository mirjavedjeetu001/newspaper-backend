import { DistrictService } from './district.service';
export declare class DistrictController {
    private readonly districtService;
    constructor(districtService: DistrictService);
    findAll(): Promise<import("../../entities/district.entity").District[]>;
    findActive(): Promise<import("../../entities/district.entity").District[]>;
    findOne(id: string): Promise<import("../../entities/district.entity").District | null>;
    create(districtData: any): Promise<import("../../entities/district.entity").District>;
    update(id: string, districtData: any): Promise<import("../../entities/district.entity").District | null>;
    delete(id: string): Promise<void>;
}
