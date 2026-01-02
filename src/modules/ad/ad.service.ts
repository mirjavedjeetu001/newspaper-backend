import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ad } from '../../entities/ad.entity';

@Injectable()
export class AdService {
  constructor(
    @InjectRepository(Ad)
    private adRepository: Repository<Ad>,
  ) {}

  async findAll(): Promise<Ad[]> {
    return this.adRepository.find({
      where: { is_active: true },
      order: { order: 'ASC' },
    });
  }

  async findByPosition(position: string): Promise<Ad[]> {
    return this.adRepository.find({
      where: { position, is_active: true },
      order: { order: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Ad | null> {
    return this.adRepository.findOne({
      where: { id },
    });
  }

  async create(adData: Partial<Ad>): Promise<Ad> {
    const ad = this.adRepository.create(adData);
    return this.adRepository.save(ad);
  }

  async update(id: number, adData: Partial<Ad>): Promise<Ad | null> {
    await this.adRepository.update(id, adData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.adRepository.delete(id);
  }
}
