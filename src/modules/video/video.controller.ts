import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { VideoService } from './video.service';
import { Video } from '../../entities/video.entity';

@Controller('videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get()
  findAll(): Promise<Video[]> {
    return this.videoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Video | null> {
    return this.videoService.findOne(+id);
  }

  @Post()
  create(@Body() videoData: Partial<Video>): Promise<Video> {
    return this.videoService.create(videoData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() videoData: Partial<Video>): Promise<Video | null> {
    return this.videoService.update(+id, videoData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.videoService.delete(+id);
  }
}
