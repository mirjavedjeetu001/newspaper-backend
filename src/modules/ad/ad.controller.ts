import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { AdService } from './ad.service';
import { Ad } from '../../entities/ad.entity';

@Controller('ads')
export class AdController {
  constructor(private readonly adService: AdService) {}

  @Get()
  findAll(@Query('position') position?: string): Promise<Ad[]> {
    if (position) {
      return this.adService.findByPosition(position);
    }
    return this.adService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Ad | null> {
    return this.adService.findOne(+id);
  }

  @Post()
  create(@Body() adData: Partial<Ad>): Promise<Ad> {
    return this.adService.create(adData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() adData: Partial<Ad>): Promise<Ad | null> {
    return this.adService.update(+id, adData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.adService.delete(+id);
  }
}
