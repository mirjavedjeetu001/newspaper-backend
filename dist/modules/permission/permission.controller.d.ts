import { PermissionService } from './permission.service';
export declare class PermissionController {
    private readonly permissionService;
    constructor(permissionService: PermissionService);
    findAll(module?: string): Promise<import("../../entities/permission.entity").Permission[]>;
    findOne(id: string): Promise<import("../../entities/permission.entity").Permission | null>;
    create(permissionData: any): Promise<import("../../entities/permission.entity").Permission>;
    update(id: string, permissionData: any): Promise<import("../../entities/permission.entity").Permission | null>;
    delete(id: string): Promise<void>;
}
