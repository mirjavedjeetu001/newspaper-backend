import { Role } from './role.entity';
import { District } from './district.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    full_name: string;
    phone: string;
    roles: Role[];
    district: District;
    district_id: number;
    is_active: boolean;
    last_login: Date;
    created_at: Date;
    updated_at: Date;
}
