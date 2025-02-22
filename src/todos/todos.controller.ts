import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Todo } from '@prisma/client';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Post()
  async createTodo(@Body() todoData: { todo: string }): Promise<Todo> {
    return this.todoService.createTodo(todoData);
  }

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  async getATodo(@Param('id', ParseIntPipe) id: string) {
    return this.todoService.getATodo({ id: Number(id) });
  }

  @Patch(':id')
  async updateTodo(
    @Param('id', ParseIntPipe) id: string,
    @Body() todoData: { todo: string },
  ) {
    return this.todoService.updateTodo({
      where: { id: Number(id) },
      data: { ...todoData, modifiedOn: new Date() },
    });
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: string) {
    return this.todoService.deleteTodo({ id: Number(id) });
  }
}
