import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Get(':id/permissions')
  async getUserPermissions(@Param('id') id: string) {
    const permissions = await this.userService.getUserPermissions(+id);
    return { permissions };
  }

  @Post()
  async create(@Body() userData: any) {
    const { roleIds, districtId, ...userInfo } = userData;
    
    const user = await this.userService.create(userInfo);
    
    // Assign roles and district via update
    if (roleIds || districtId) {
      return this.userService.update(user.id, {
        roles: roleIds ? roleIds.map(id => ({ id })) : undefined,
        district_id: districtId
      });
    }
    
    return user;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() userData: any) {
    const { roleIds, districtId, ...userInfo } = userData;
    
    const updateData: any = { ...userInfo };
    if (roleIds) {
      updateData.roles = roleIds.map(id => ({ id }));
    }
    if (districtId !== undefined) {
      updateData.district_id = districtId;
    }
    
    return this.userService.update(+id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }

  @Post('login')
  async login(@Body() credentials: { username: string; password: string }) {
    const user = await this.userService.findByUsername(credentials.username);
    
    if (!user) {
      return { success: false, message: 'User not found' };
    }

    const bcrypt = require('bcrypt');
    const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

    if (!isPasswordValid) {
      return { success: false, message: 'Invalid password' };
    }

    if (!user.is_active) {
      return { success: false, message: 'User is inactive' };
    }

    await this.userService.updateLastLogin(user.id);
    const permissions = await this.userService.getUserPermissions(user.id);

    const { password, ...userWithoutPassword } = user;
    return {
      success: true,
      user: userWithoutPassword,
      permissions
    };
  }
}
