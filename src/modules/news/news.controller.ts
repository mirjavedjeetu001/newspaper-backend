import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from '../../entities/news.entity';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  findAll(): Promise<News[]> {
    return this.newsService.findAll();
  }

  @Get('breaking')
  findBreaking(): Promise<News[]> {
    return this.newsService.findBreaking();
  }

  @Get('featured')
  findFeatured(): Promise<News[]> {
    return this.newsService.findFeatured();
  }

  @Get('trending')
  findTrending(): Promise<News[]> {
    return this.newsService.findTrending();
  }

  @Get('category/:categoryId')
  findByCategory(@Param('categoryId') categoryId: string): Promise<News[]> {
    return this.newsService.findByCategory(+categoryId);
  }

  @Get('slug/:slug')
  findBySlug(@Param('slug') slug: string): Promise<News | null> {
    return this.newsService.findBySlug(slug);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<News | null> {
    return this.newsService.findOne(+id);
  }

  @Post()
  create(@Body() newsData: Partial<News>): Promise<News> {
    return this.newsService.create(newsData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newsData: Partial<News>): Promise<News | null> {
    return this.newsService.update(+id, newsData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.newsService.delete(+id);
  }
}
