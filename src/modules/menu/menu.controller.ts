import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from '../../entities/menu.entity';

@Controller('menus')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async findAll(@Query('location') location?: string): Promise<Menu[]> {
    if (location) {
      return this.menuService.findByLocation(location);
    }
    return this.menuService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Menu | null> {
    return this.menuService.findOne(+id);
  }

  @Post()
  async create(@Body() data: Partial<Menu>): Promise<Menu> {
    return this.menuService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<Menu>): Promise<Menu | null> {
    return this.menuService.update(+id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.menuService.delete(+id);
  }
}
