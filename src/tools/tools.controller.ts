import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  Put,
  HttpCode,
} from '@nestjs/common';
import { Tools } from '../entity/Tools';
import { ToolsService } from './tools.service';

@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  @Post()
  create(
    @Body('title') title: string,
    @Body('link') link: string,
    @Body('description') description: string,
    @Body('tags') tags: string,
  ): Promise<Tools> {
    return this.toolsService.create(title, link, description, tags);
  }

  @Get()
  findAll(): Promise<Tools[]> {
    return this.toolsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Tools> {
    return this.toolsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('link') link: string,
    @Body('description') description: string,
    @Body('tags') tags: string,
  ): Promise<void> {
    return this.toolsService.update(id, title, link, description, tags);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string): Promise<void> {
    return this.toolsService.remove(id);
  }
}
