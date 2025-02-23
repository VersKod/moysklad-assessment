import type { UserT } from '../../entities/user/types/userTypes';

export type useDataReturnT = (UserT & { todos?: number });
