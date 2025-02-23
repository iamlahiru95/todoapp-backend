import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { PrismaClientService } from 'src/prisma/prisma-client.service';

@Module({
  controllers: [TodosController],
  providers: [TodosService, PrismaClientService],
})
export class TodosModule {}
