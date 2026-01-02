import { UserService } from './user.service';
import { User } from '../../entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User | null>;
    getUserPermissions(id: string): Promise<{
        permissions: string[];
    }>;
    create(userData: any): Promise<User | null>;
    update(id: string, userData: any): Promise<User | null>;
    delete(id: string): Promise<void>;
    login(credentials: {
        username: string;
        password: string;
    }): Promise<{
        success: boolean;
        message: string;
        user?: undefined;
        permissions?: undefined;
    } | {
        success: boolean;
        user: {
            id: number;
            username: string;
            email: string;
            full_name: string;
            phone: string;
            roles: import("../../entities/role.entity").Role[];
            district: import("../../entities/district.entity").District;
            district_id: number;
            is_active: boolean;
            last_login: Date;
            created_at: Date;
            updated_at: Date;
        };
        permissions: string[];
        message?: undefined;
    }>;
}
