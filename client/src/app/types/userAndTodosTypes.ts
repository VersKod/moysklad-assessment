import type { UserT } from '../../entities/user/types/userTypes';

export type ProcessDataReturnT = (UserT & { todos?: number })[];
