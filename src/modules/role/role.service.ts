import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../../entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find({ relations: ['permissions'] });
  }

  async findOne(id: number): Promise<Role | null> {
    return this.roleRepository.findOne({
      where: { id },
      relations: ['permissions']
    });
  }

  async findByName(name: string): Promise<Role | null> {
    return this.roleRepository.findOne({
      where: { name },
      relations: ['permissions']
    });
  }

  async create(roleData: Partial<Role>): Promise<Role> {
    const role = this.roleRepository.create(roleData);
    return this.roleRepository.save(role);
  }

  async update(id: number, roleData: Partial<Role>): Promise<Role | null> {
    await this.roleRepository.update(id, roleData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.roleRepository.delete(id);
  }

  async assignPermissions(roleId: number, permissionIds: number[]): Promise<Role | null> {
    const role = await this.findOne(roleId);
    if (!role) return null;
    role.permissions = permissionIds.map(id => ({ id } as any));
    return this.roleRepository.save(role);
  }
}
