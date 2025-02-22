import {z} from 'zod';

export const todoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  completed: z.boolean(),
})