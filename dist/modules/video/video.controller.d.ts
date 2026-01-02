import { VideoService } from './video.service';
import { Video } from '../../entities/video.entity';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    findAll(): Promise<Video[]>;
    findOne(id: string): Promise<Video | null>;
    create(videoData: Partial<Video>): Promise<Video>;
    update(id: string, videoData: Partial<Video>): Promise<Video | null>;
    delete(id: string): Promise<void>;
}
