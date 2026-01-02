import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        success: boolean;
        admin: {
            id: number;
            username: string;
            email: string;
            role: string;
        };
        message: string;
    }>;
    register(body: {
        username: string;
        password: string;
        email: string;
    }): Promise<{
        success: boolean;
        admin: {
            id: number;
            username: string;
            email: string;
            role: string;
        };
        message: string;
    }>;
    findAll(): Promise<{
        id: number;
        username: string;
        email: string;
        role: string;
    }[]>;
}
