import React, { useState } from 'react';
import TodoList from './TodoList';
import { useTodos } from '../hooks/useTodos';
import { Filter } from '../types/common.types';

const TodoApp: React.FC = () => {
  const { todos, addTodo, toggleTodo, clearAllTodos } = useTodos();
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<Filter>('All');

  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  const handleFilterChange = (newFilter: Filter) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder='Add a todo'
      />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={clearAllTodos}>Refresh Todos</button>
      <div>
        <button
          onClick={() => handleFilterChange('All')}
          disabled={filter === 'All'}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange('Active')}
          disabled={filter === 'Active'}
        >
          Active
        </button>
        <button
          onClick={() => handleFilterChange('Completed')}
          disabled={filter === 'Completed'}
        >
          Completed
        </button>
      </div>
      <div className='todo-container'>
        <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
};

export default TodoApp;
