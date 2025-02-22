import type { z } from 'zod';
import type { userSchema } from '../schema/userSchema';

export type UserT = z.infer<typeof userSchema>;
export type UserListT = UserT[];
