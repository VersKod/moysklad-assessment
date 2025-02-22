import axios from 'axios';
import { userSchema } from '../schema/userSchema';
import { ZodError } from 'zod';
import type { UserListT } from '../types/types';

export const getUsers = async (): Promise<UserListT> => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return userSchema.array().parse(response.data);
  } catch (error) {
    if (error instanceof ZodError) throw new Error('Zod Error');
    throw new Error('Server Error');
  }
};
