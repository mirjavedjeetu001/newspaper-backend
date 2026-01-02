import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from '../../entities/permission.entity';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
  ) {}

  async findAll(): Promise<Permission[]> {
    return this.permissionRepository.find({ relations: ['roles'] });
  }

  async findOne(id: number): Promise<Permission | null> {
    return this.permissionRepository.findOne({
      where: { id },
      relations: ['roles']
    });
  }

  async findByModule(module: string): Promise<Permission[]> {
    return this.permissionRepository.find({ where: { module } });
  }

  async create(permissionData: Partial<Permission>): Promise<Permission> {
    const permission = this.permissionRepository.create(permissionData);
    return this.permissionRepository.save(permission);
  }

  async update(id: number, permissionData: Partial<Permission>): Promise<Permission | null> {
    await this.permissionRepository.update(id, permissionData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.permissionRepository.delete(id);
  }
}
