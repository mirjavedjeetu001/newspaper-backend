import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from '../../entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}

  async findAll(): Promise<Menu[]> {
    return this.menuRepository.find({
      order: { order: 'ASC' },
    });
  }

  async findByLocation(location: string): Promise<Menu[]> {
    return this.menuRepository.find({
      where: [
        { location, is_active: true },
        { location: 'both', is_active: true },
      ],
      order: { order: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Menu | null> {
    return this.menuRepository.findOne({ where: { id } });
  }

  async create(data: Partial<Menu>): Promise<Menu> {
    const menu = this.menuRepository.create(data);
    return this.menuRepository.save(menu);
  }

  async update(id: number, data: Partial<Menu>): Promise<Menu | null> {
    await this.menuRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.menuRepository.delete(id);
  }
}
