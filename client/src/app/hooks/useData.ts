import { useEffect, useMemo, useState } from 'react';
import { getUsers } from '../../entities/user/api/userService';
import { getTodos } from '../../entities/todo/api/todoService';
import type { UserListT } from '../../entities/user/types/userTypes';
import type { TodoListT } from '../../entities/todo/types/todoTypes';
import type { useDataReturnT } from '../types/userAndTodosTypes';

export const useData = (): useDataReturnT[] => {
  const [users, setUsers] = useState<UserListT>([]);
  const [todos, setTodos] = useState<TodoListT>([]);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        const [usersData, todosData] = await Promise.all([getUsers(), getTodos()]);
        setUsers(usersData);
        setTodos(todosData);
      } catch (error) {
        console.log('Ошибка получения данных', error);
      }
    };
    void getData();
  }, []);

  const userTodos: useDataReturnT[] = useMemo(() => {
    if (!users.length || !todos.length) return [];

    const userIdTodosCompleted: Record<number, number> = {};

    todos.forEach((todo) => {
      if (todo.completed) {
        userIdTodosCompleted[todo.userId] = (userIdTodosCompleted[todo.userId] || 0) + 1;
      }
    });

    return users.map((user) => ({
      ...user,
      todos: userIdTodosCompleted[user.id] || 0,
    }));
  }, [users, todos]);

  return userTodos;
};
