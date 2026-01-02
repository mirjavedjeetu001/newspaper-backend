import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from '../../entities/category.entity';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category | null> {
    return this.categoryService.findOne(+id);
  }

  @Get('slug/:slug')
  findBySlug(@Param('slug') slug: string): Promise<Category | null> {
    return this.categoryService.findBySlug(slug);
  }

  @Post()
  create(@Body() categoryData: Partial<Category>): Promise<Category> {
    return this.categoryService.create(categoryData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() categoryData: Partial<Category>): Promise<Category | null> {
    return this.categoryService.update(+id, categoryData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.categoryService.delete(+id);
  }
}
