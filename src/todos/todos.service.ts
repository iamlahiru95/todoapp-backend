import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { PrismaClientService } from 'src/prisma/prisma-client.service';

@Injectable()
export class TodosService {
  constructor(private prismaClientService: PrismaClientService) {}

  /**
   *
   * @param data
   * @returns
   */
  async createTodo(data: Prisma.TodoCreateInput) {
    return this.prismaClientService.todo.create({ data });
  }

  /**
   *
   * @returns
   */
  async getAllTodos(): Promise<Todo[]> {
    return this.prismaClientService.todo.findMany();
  }

  /**
   *
   * @param todoWhereUniqueInput
   * @returns
   */
  async getATodo(
    todoWhereUniqueInput: Prisma.TodoWhereUniqueInput,
  ): Promise<Todo> {
    return this.prismaClientService.todo.findUnique({
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
    return this.prismaClientService.todo.update({ where, data });
  }

  /**
   *
   * @param where
   * @returns
   */
  async deleteTodo(where: Prisma.TodoWhereUniqueInput): Promise<Todo> {
    return this.prismaClientService.todo.delete({ where });
  }
}
