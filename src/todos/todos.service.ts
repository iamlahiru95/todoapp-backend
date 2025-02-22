import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodosService {
  constructor(private prismaService: PrismaService) {}

  /**
   * 
   * @param data 
   * @returns 
   */
  async createTodo(data: Prisma.TodoCreateInput) {
    return this.prismaService.todo.create({ data });
  }

  /**
   *
   * @returns
   */
  async getAllTodos(): Promise<Todo[]> {
    return this.prismaService.todo.findMany();
  }

  /**
   *
   * @param todoWhereUniqueInput
   * @returns
   */
  async getATodo(
    todoWhereUniqueInput: Prisma.TodoWhereUniqueInput,
  ): Promise<Todo> {
    return this.prismaService.todo.findUnique({
      where: todoWhereUniqueInput,
    });
  }

  /**
   *
   * @param params
   * @returns
   */
  async updateTodo(params: {
    where: Prisma.TodoWhereUniqueInput;
    data: Prisma.TodoUpdateInput;
  }): Promise<Todo> {
    const { where, data } = params;
    return this.prismaService.todo.update({ where, data });
  }

  /**
   *
   * @param where
   * @returns
   */
  async deleteTodo(where: Prisma.TodoWhereUniqueInput): Promise<Todo> {
    return this.prismaService.todo.delete({ where });
  }
}
