import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from '../../entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {}

  async findAll(): Promise<News[]> {
    return this.newsRepository.find({
      relations: ['category'],
      where: { is_active: true },
      order: { created_at: 'DESC' },
    });
  }

  async findBreaking(): Promise<News[]> {
    return this.newsRepository.find({
      where: { is_breaking: true, is_active: true },
      relations: ['category'],
      order: { created_at: 'DESC' },
      take: 5,
    });
  }

  async findFeatured(): Promise<News[]> {
    return this.newsRepository.find({
      where: { is_featured: true, is_active: true },
      relations: ['category'],
      order: { created_at: 'DESC' },
      take: 10,
    });
  }

  async findTrending(): Promise<News[]> {
    return this.newsRepository.find({
      where: { is_trending: true, is_active: true },
      relations: ['category'],
      order: { views: 'DESC' },
      take: 10,
    });
  }

  async findByCategory(categoryId: number): Promise<News[]> {
    return this.newsRepository.find({
      where: { category: { id: categoryId }, is_active: true },
      relations: ['category'],
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: number): Promise<News | null> {
    const news = await this.newsRepository.findOne({
      where: { id, is_active: true },
      relations: ['category'],
    });
    
    if (news) {
      news.views += 1;
      await this.newsRepository.save(news);
    }
    
    return news;
  }

  async create(newsData: Partial<News>): Promise<News> {
    const news = this.newsRepository.create(newsData);
    return this.newsRepository.save(news);
  }

  async update(id: number, newsData: Partial<News>): Promise<News | null> {
    await this.newsRepository.update(id, newsData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.newsRepository.delete(id);
  }
}
