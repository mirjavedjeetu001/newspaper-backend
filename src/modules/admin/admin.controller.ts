import { Controller, Post, Body, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const admin = await this.adminService.validateAdmin(body.username, body.password);
    if (!admin) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    // Return admin data without password
    const { password, ...result } = admin;
    return {
      success: true,
      admin: result,
      message: 'Login successful',
    };
  }

  @Post('register')
  async register(@Body() body: { username: string; password: string; email: string }) {
    const existingAdmin = await this.adminService.findByUsername(body.username);
    if (existingAdmin) {
      throw new HttpException('Username already exists', HttpStatus.BAD_REQUEST);
    }
    
    const admin = await this.adminService.create(body.username, body.password, body.email);
    const { password, ...result } = admin;
    return {
      success: true,
      admin: result,
      message: 'Admin created successfully',
    };
  }

  @Get()
  async findAll() {
    const admins = await this.adminService.findAll();
    return admins.map(({ password, ...admin }) => admin);
  }
}
