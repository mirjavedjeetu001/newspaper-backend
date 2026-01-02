import { PhotoService } from './photo.service';
import { Photo } from '../../entities/photo.entity';
export declare class PhotoController {
    private readonly photoService;
    constructor(photoService: PhotoService);
    findAll(): Promise<Photo[]>;
    findOne(id: string): Promise<Photo | null>;
    create(photoData: Partial<Photo>): Promise<Photo>;
    update(id: string, photoData: Partial<Photo>): Promise<Photo | null>;
    delete(id: string): Promise<void>;
}
