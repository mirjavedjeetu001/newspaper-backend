import { Role } from './role.entity';
export declare class Permission {
    id: number;
    name: string;
    display_name_en: string;
    display_name_bn: string;
    module: string;
    description: string;
    roles: Role[];
    created_at: Date;
    updated_at: Date;
}
