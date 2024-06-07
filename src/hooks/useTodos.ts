import { useState, useEffect } from 'react';
import { loadTodos, saveTodos, clearTodos } from '../utils/localStorage';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(loadTodos());

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearAllTodos = () => {
    setTodos([]);
    clearTodos();
  };

  return { todos, addTodo, toggleTodo, clearAllTodos };
};
