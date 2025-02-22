import axios from 'axios';
import { ZodError } from 'zod';
import type { TodoListT } from '../types/todoTypes';
import { todoSchema } from '../schema/todoSchema';

export const getTodos = async (): Promise<TodoListT> => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return todoSchema.array().parse(response.data);
  } catch (error) {
    if (error instanceof ZodError) throw new Error('Zod Error', error);
    throw new Error('Server Error');
  }
};
