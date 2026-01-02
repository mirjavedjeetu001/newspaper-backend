import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Post()
  create(@Body() roleData: any) {
    return this.roleService.create(roleData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() roleData: any) {
    return this.roleService.update(+id, roleData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.roleService.delete(+id);
  }

  @Post(':id/permissions')
  assignPermissions(@Param('id') id: string, @Body() data: { permissionIds: number[] }) {
    return this.roleService.assignPermissions(+id, data.permissionIds);
  }
}
