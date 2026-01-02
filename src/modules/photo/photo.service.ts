import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from '../../entities/photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find({
      where: { is_active: true },
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Photo | null> {
    return this.photoRepository.findOne({
      where: { id, is_active: true },
    });
  }

  async create(photoData: Partial<Photo>): Promise<Photo> {
    const photo = this.photoRepository.create(photoData);
    return this.photoRepository.save(photo);
  }

  async update(id: number, photoData: Partial<Photo>): Promise<Photo | null> {
    await this.photoRepository.update(id, photoData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.photoRepository.delete(id);
  }
}
