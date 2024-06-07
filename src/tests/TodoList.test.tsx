import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders todo list', () => {
  const todos = [
    { id: 1, text: 'Test Todo 1', completed: false },
    { id: 2, text: 'Test Todo 2', completed: true },
  ];
  const toggleTodo = jest.fn();

  render(<TodoList todos={todos} toggleTodo={toggleTodo} />);

  const todoElements = screen.getAllByRole('listitem');
  expect(todoElements.length).toBe(2);
});
