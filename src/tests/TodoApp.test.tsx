import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from '../components/TodoApp';

test('renders todo app', () => {
  render(<TodoApp />);

  const heading = screen.getByText(/todo list/i);
  expect(heading).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoApp />);

  const input = screen.getByPlaceholderText(/add a todo/i);
  const addButton = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  const newTodo = screen.getByText(/new todo/i);
  expect(newTodo).toBeInTheDocument();
});

test('filters todos', () => {
  render(<TodoApp />);

  const input = screen.getByPlaceholderText(/add a todo/i);
  const addButton = screen.getByText(/add/i);

  // Add a few todos
  fireEvent.change(input, { target: { value: 'Todo 1' } });
  fireEvent.click(addButton);
  fireEvent.change(input, { target: { value: 'Todo 2' } });
  fireEvent.click(addButton);

  const todo1 = screen.getByText(/todo 1/i);

  // Complete the first todo
  const checkbox1 = todo1.previousSibling as HTMLInputElement;
  fireEvent.click(checkbox1);

  // Filter Active todos
  const activeFilter = screen.getByText(/active/i);
  fireEvent.click(activeFilter);
  expect(screen.queryByText(/todo 1/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/todo 2/i)).toBeInTheDocument();

  // Filter Completed todos
  const completedFilter = screen.getByText(/completed/i);
  fireEvent.click(completedFilter);
  expect(screen.queryByText(/todo 1/i)).toBeInTheDocument();
  expect(screen.queryByText(/todo 2/i)).not.toBeInTheDocument();

  // Filter All todos
  const allFilter = screen.getByText(/all/i);
  fireEvent.click(allFilter);
  expect(screen.queryByText(/todo 1/i)).toBeInTheDocument();
  expect(screen.queryByText(/todo 2/i)).toBeInTheDocument();
});

test('clears all todos', () => {
  render(<TodoApp />);

  const input = screen.getByPlaceholderText(/add a todo/i);
  const addButton = screen.getByText(/add/i);

  // Add a few todos
  fireEvent.change(input, { target: { value: 'Todo 1' } });
  fireEvent.click(addButton);
  fireEvent.change(input, { target: { value: 'Todo 2' } });
  fireEvent.click(addButton);

  // Clear all todos
  const clearButton = screen.getByText(/refresh todos/i);
  fireEvent.click(clearButton);

  expect(screen.queryByText(/todo 1/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/todo 2/i)).not.toBeInTheDocument();
});
