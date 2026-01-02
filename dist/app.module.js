"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const news_module_1 = require("./modules/news/news.module");
const category_module_1 = require("./modules/category/category.module");
const photo_module_1 = require("./modules/photo/photo.module");
const video_module_1 = require("./modules/video/video.module");
const ad_module_1 = require("./modules/ad/ad.module");
const admin_module_1 = require("./modules/admin/admin.module");
const settings_module_1 = require("./modules/settings/settings.module");
const menu_module_1 = require("./modules/menu/menu.module");
const user_module_1 = require("./modules/user/user.module");
const role_module_1 = require("./modules/role/role.module");
const permission_module_1 = require("./modules/permission/permission.module");
const district_module_1 = require("./modules/district/district.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT || '3306'),
                username: process.env.DB_USERNAME || 'root',
                password: process.env.DB_PASSWORD || '',
                database: process.env.DB_DATABASE || 'newspaper_db',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            news_module_1.NewsModule,
            category_module_1.CategoryModule,
            photo_module_1.PhotoModule,
            video_module_1.VideoModule,
            ad_module_1.AdModule,
            admin_module_1.AdminModule,
            settings_module_1.SettingsModule,
            menu_module_1.MenuModule,
            user_module_1.UserModule,
            role_module_1.RoleModule,
            permission_module_1.PermissionModule,
            district_module_1.DistrictModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map