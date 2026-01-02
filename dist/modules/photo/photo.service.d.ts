import { Repository } from 'typeorm';
import { Photo } from '../../entities/photo.entity';
export declare class PhotoService {
    private photoRepository;
    constructor(photoRepository: Repository<Photo>);
    findAll(): Promise<Photo[]>;
    findOne(id: number): Promise<Photo | null>;
    create(photoData: Partial<Photo>): Promise<Photo>;
    update(id: number, photoData: Partial<Photo>): Promise<Photo | null>;
    delete(id: number): Promise<void>;
}
