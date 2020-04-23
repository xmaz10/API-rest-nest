import { Module } from '@nestjs/common';
import { ToolsModule } from './tools/tools.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ToolsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database',
      port: 5432,
      username: 'test',
      password: 'test',
      database: 'tools_test',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
