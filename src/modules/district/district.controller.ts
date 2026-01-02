import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DistrictService } from './district.service';

@Controller('districts')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @Get()
  findAll() {
    return this.districtService.findAll();
  }

  @Get('active')
  findActive() {
    return this.districtService.findActive();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.districtService.findOne(+id);
  }

  @Post()
  create(@Body() districtData: any) {
    return this.districtService.create(districtData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() districtData: any) {
    return this.districtService.update(+id, districtData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.districtService.delete(+id);
  }
}
