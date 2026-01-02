import { RoleService } from './role.service';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    findAll(): Promise<import("../../entities/role.entity").Role[]>;
    findOne(id: string): Promise<import("../../entities/role.entity").Role | null>;
    create(roleData: any): Promise<import("../../entities/role.entity").Role>;
    update(id: string, roleData: any): Promise<import("../../entities/role.entity").Role | null>;
    delete(id: string): Promise<void>;
    assignPermissions(id: string, data: {
        permissionIds: number[];
    }): Promise<import("../../entities/role.entity").Role | null>;
}
