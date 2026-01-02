import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Video } from '../../entities/video.entity';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video)
    private videoRepository: Repository<Video>,
  ) {}

  async findAll(): Promise<Video[]> {
    return this.videoRepository.find({
      where: { is_active: true },
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Video | null> {
    return this.videoRepository.findOne({
      where: { id, is_active: true },
    });
  }

  async create(videoData: Partial<Video>): Promise<Video> {
    const video = this.videoRepository.create(videoData);
    return this.videoRepository.save(video);
  }

  async update(id: number, videoData: Partial<Video>): Promise<Video | null> {
    await this.videoRepository.update(id, videoData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.videoRepository.delete(id);
  }
}
