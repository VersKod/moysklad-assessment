import { useEffect, useState } from 'react';
import { getUsers } from '../../entities/user/api/userService';
import { getTodos } from '../../entities/todo/api/todoService';
import type { UserListT } from '../../entities/user/types/types';
import type { TodoListT } from '../../entities/todo/types/types';

export function useData() {
  const [users, setUsers] = useState<UserListT | null>(null);
  const [todos, setTodos] = useState<TodoListT | null>(null);

  useEffect(() => {
    (async () => {
      setUsers(await getUsers());
      setTodos(await getTodos());
    })().catch((error: unknown) => console.log(error));
  }, []);

  return { users, todos };
}
