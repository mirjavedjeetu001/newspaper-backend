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
exports.DistrictService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const district_entity_1 = require("../../entities/district.entity");
let DistrictService = class DistrictService {
    districtRepository;
    constructor(districtRepository) {
        this.districtRepository = districtRepository;
    }
    async findAll() {
        return this.districtRepository.find();
    }
    async findActive() {
        return this.districtRepository.find({ where: { is_active: true } });
    }
    async findOne(id) {
        return this.districtRepository.findOne({ where: { id } });
    }
    async create(districtData) {
        const district = this.districtRepository.create(districtData);
        return this.districtRepository.save(district);
    }
    async update(id, districtData) {
        await this.districtRepository.update(id, districtData);
        return this.findOne(id);
    }
    async delete(id) {
        await this.districtRepository.delete(id);
    }
};
exports.DistrictService = DistrictService;
exports.DistrictService = DistrictService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(district_entity_1.District)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DistrictService);
//# sourceMappingURL=district.service.js.map