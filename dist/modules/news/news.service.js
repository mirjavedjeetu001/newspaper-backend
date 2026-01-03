"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const news_entity_1 = require("../../entities/news.entity");
let NewsService = class NewsService {
    newsRepository;
    constructor(newsRepository) {
        this.newsRepository = newsRepository;
    }
    async findAll() {
        return this.newsRepository.find({
            relations: ['category'],
            where: { is_active: true },
            order: { created_at: 'DESC' },
        });
    }
    async findBreaking() {
        return this.newsRepository.find({
            where: { is_breaking: true, is_active: true },
            relations: ['category'],
            order: { created_at: 'DESC' },
            take: 5,
        });
    }
    async findFeatured() {
        return this.newsRepository.find({
            where: { is_featured: true, is_active: true },
            relations: ['category'],
            order: { created_at: 'DESC' },
            take: 10,
        });
    }
    async findTrending() {
        return this.newsRepository.find({
            where: { is_trending: true, is_active: true },
            relations: ['category'],
            order: { views: 'DESC' },
            take: 10,
        });
    }
    async findByCategory(categoryId) {
        return this.newsRepository.find({
            where: { category: { id: categoryId }, is_active: true },
            relations: ['category'],
            order: { created_at: 'DESC' },
        });
    }
    async findOne(id) {
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
    async findBySlug(slug) {
        const news = await this.newsRepository.findOne({
            where: { slug, is_active: true },
            relations: ['category'],
        });
        if (news) {
            news.views += 1;
            await this.newsRepository.save(news);
        }
        return news;
    }
    async create(newsData) {
        const news = this.newsRepository.create(newsData);
        return this.newsRepository.save(news);
    }
    async update(id, newsData) {
        await this.newsRepository.update(id, newsData);
        return this.findOne(id);
    }
    async delete(id) {
        await this.newsRepository.delete(id);
    }
};
exports.NewsService = NewsService;
exports.NewsService = NewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(news_entity_1.News)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NewsService);
//# sourceMappingURL=news.service.js.map