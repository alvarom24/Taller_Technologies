import { Todo } from '../types/common.types';

const TODO_STORAGE_KEY = 'todos';

export const loadTodos = (): Todo[] => {
  const todos = localStorage.getItem(TODO_STORAGE_KEY);
  return todos ? JSON.parse(todos) : [];
};

export const saveTodos = (todos: Todo[]) => {
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
};

export const clearTodos = () => {
  localStorage.removeItem(TODO_STORAGE_KEY);
};
