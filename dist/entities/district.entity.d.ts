import { User } from './user.entity';
export declare class District {
    id: number;
    name_en: string;
    name_bn: string;
    code: string;
    is_active: boolean;
    users: User[];
    created_at: Date;
    updated_at: Date;
}
