import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

test('renders todo item', () => {
  const todo = { id: 1, text: 'Test Todo', completed: false };
  const toggleTodo = jest.fn();

  render(<TodoItem todo={todo} toggleTodo={toggleTodo} />);

  const todoElement = screen.getByText(/test todo/i);
  expect(todoElement).toBeInTheDocument();
});

test('toggle todo', () => {
  const todo = { id: 1, text: 'Test Todo', completed: false };
  const toggleTodo = jest.fn();

  render(<TodoItem todo={todo} toggleTodo={toggleTodo} />);

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(toggleTodo).toHaveBeenCalledWith(todo.id);
});
