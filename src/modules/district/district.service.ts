import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { District } from '../../entities/district.entity';

@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(District)
    private districtRepository: Repository<District>,
  ) {}

  async findAll(): Promise<District[]> {
    return this.districtRepository.find();
  }

  async findActive(): Promise<District[]> {
    return this.districtRepository.find({ where: { is_active: true } });
  }

  async findOne(id: number): Promise<District | null> {
    return this.districtRepository.findOne({ where: { id } });
  }

  async create(districtData: Partial<District>): Promise<District> {
    const district = this.districtRepository.create(districtData);
    return this.districtRepository.save(district);
  }

  async update(id: number, districtData: Partial<District>): Promise<District | null> {
    await this.districtRepository.update(id, districtData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.districtRepository.delete(id);
  }
}
