import { Repository } from 'typeorm';
import { Permission } from '../../entities/permission.entity';
export declare class PermissionService {
    private permissionRepository;
    constructor(permissionRepository: Repository<Permission>);
    findAll(): Promise<Permission[]>;
    findOne(id: number): Promise<Permission | null>;
    findByModule(module: string): Promise<Permission[]>;
    create(permissionData: Partial<Permission>): Promise<Permission>;
    update(id: number, permissionData: Partial<Permission>): Promise<Permission | null>;
    delete(id: number): Promise<void>;
}
