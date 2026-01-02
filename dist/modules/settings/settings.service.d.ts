import { Repository } from 'typeorm';
import { Settings } from '../../entities/settings.entity';
export declare class SettingsService {
    private settingsRepository;
    constructor(settingsRepository: Repository<Settings>);
    getSettings(): Promise<Settings | null>;
    updateSettings(data: Partial<Settings>): Promise<Settings>;
}
