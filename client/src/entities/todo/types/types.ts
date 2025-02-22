import type { z } from 'zod';
import type { todoSchema } from '../schema/todoSchema';

export type TodoT = z.infer<typeof todoSchema>;
export type TodoListT = TodoT[];
