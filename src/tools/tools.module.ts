import { Module } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { ToolsController } from './tools.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tools } from '../entity/Tools';

@Module({
  imports: [TypeOrmModule.forFeature([Tools])],
  providers: [ToolsService],
  controllers: [ToolsController],
})
export class ToolsModule {}
