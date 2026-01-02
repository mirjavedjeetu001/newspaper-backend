import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from '../../entities/photo.entity';

@Controller('photos')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Photo | null> {
    return this.photoService.findOne(+id);
  }

  @Post()
  create(@Body() photoData: Partial<Photo>): Promise<Photo> {
    return this.photoService.create(photoData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() photoData: Partial<Photo>): Promise<Photo | null> {
    return this.photoService.update(+id, photoData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.photoService.delete(+id);
  }
}
