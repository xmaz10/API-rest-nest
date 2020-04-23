import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tools } from '../entity/Tools';
import { Repository } from 'typeorm';

@Injectable()
export class ToolsService {
  constructor(
    @InjectRepository(Tools) private toolsRepository: Repository<Tools>,
  ) {}

  create(
    title: string,
    link: string,
    description: string,
    tags: string,
  ): Promise<Tools> {
    const tools = new Tools();
    tools.title = title;
    tools.link = link;
    tools.description = description;
    tools.tags = tags;
    return this.toolsRepository.save(tools);
  }

  async findAll(): Promise<Tools[]> {
    return this.toolsRepository.find();
  }

  async findOne(id: string): Promise<Tools> {
    return this.toolsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.toolsRepository.delete(id);
  }

  async update(
    id: string,
    title: string,
    link: string,
    description: string,
    tags: string,
  ): Promise<void> {
    const tools = new Tools();
    tools.title = title;
    tools.link = link;
    tools.description = description;
    tools.tags = tags;
    await this.toolsRepository.update(id, tools);
  }
}
