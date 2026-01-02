import { Repository } from 'typeorm';
import { Admin } from '../../entities/admin.entity';
export declare class AdminService {
    private adminRepository;
    constructor(adminRepository: Repository<Admin>);
    findByUsername(username: string): Promise<Admin | null>;
    validateAdmin(username: string, password: string): Promise<Admin | null>;
    create(username: string, password: string, email: string): Promise<Admin>;
    findAll(): Promise<Admin[]>;
}
