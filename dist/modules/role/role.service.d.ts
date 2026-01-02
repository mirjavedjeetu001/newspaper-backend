import { Repository } from 'typeorm';
import { Role } from '../../entities/role.entity';
export declare class RoleService {
    private roleRepository;
    constructor(roleRepository: Repository<Role>);
    findAll(): Promise<Role[]>;
    findOne(id: number): Promise<Role | null>;
    findByName(name: string): Promise<Role | null>;
    create(roleData: Partial<Role>): Promise<Role>;
    update(id: number, roleData: Partial<Role>): Promise<Role | null>;
    delete(id: number): Promise<void>;
    assignPermissions(roleId: number, permissionIds: number[]): Promise<Role | null>;
}
