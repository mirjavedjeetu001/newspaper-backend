import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    create(userData: Partial<User>): Promise<User>;
    update(id: number, userData: Partial<User>): Promise<User | null>;
    delete(id: number): Promise<void>;
    updateLastLogin(id: number): Promise<void>;
    getUserPermissions(userId: number): Promise<string[]>;
    hasPermission(userId: number, permissionName: string): Promise<boolean>;
}
