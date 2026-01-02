import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Settings } from '../../entities/settings.entity';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Settings)
    private settingsRepository: Repository<Settings>,
  ) {}

  async getSettings(): Promise<Settings | null> {
    const settings = await this.settingsRepository.find();
    return settings.length > 0 ? settings[0] : null;
  }

  async updateSettings(data: Partial<Settings>): Promise<Settings> {
    const settings = await this.getSettings();
    if (settings) {
      await this.settingsRepository.update(settings.id, data);
      const updated = await this.settingsRepository.findOne({ where: { id: settings.id } });
      return updated!;
    } else {
      const newSettings = this.settingsRepository.create(data);
      return this.settingsRepository.save(newSettings);
    }
  }
}
