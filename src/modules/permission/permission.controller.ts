import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { PermissionService } from './permission.service';

@Controller('permissions')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get()
  findAll(@Query('module') module?: string) {
    if (module) {
      return this.permissionService.findByModule(module);
    }
    return this.permissionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permissionService.findOne(+id);
  }

  @Post()
  create(@Body() permissionData: any) {
    return this.permissionService.create(permissionData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() permissionData: any) {
    return this.permissionService.update(+id, permissionData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.permissionService.delete(+id);
  }
}
