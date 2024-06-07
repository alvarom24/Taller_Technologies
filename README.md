# React Micro Frontend Todo List

This is a React Micro Frontend (MFE) component for a Todo List application, implemented with TypeScript. The application allows users to add, complete, and filter todo tasks, with data persistence using localStorage.

## Features

- **Todo Creation**: Add new todo tasks.
- **Todo Status**: Mark tasks as completed or incomplete.
- **Todo Persistence**: Save todo tasks in localStorage.
- **Filters**: Filter tasks by "All", "Active", and "Completed" (Bonus).

## Setup

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/alvarom24/Taller_Technologies
   cd mfe-todo
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the application:

   ```sh
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the Todo List application.

### Testing

Run the tests with the following command:

```sh
npm test
```

## Directory Structure

src/components/: Contains the React components for the application.
src/hooks/: Contains custom hooks used in the application.
src/utils/: Contains utility functions.
src/tests/: Contains unit tests for the components.
public/: Contains the static assets and the main HTML file.
src/: Contains the main entry point and global styles.

## Design and Architectural Choices

## Component Structure:

TodoApp is the main container component.
TodoList displays the list of todos.
TodoItem represents a single todo item.
State Management:

## Used React's built-in state management with hooks for simplicity.

useTodos custom hook manages the todo state and handles side effects such as localStorage interaction.

## Local Storage:

Implemented utility functions loadTodos and saveTodos to handle localStorage operations.

## TypeScript:

Ensured type safety by defining interfaces for todos and component props.

## Testing:

Used @testing-library/react for testing components.
Provided tests for core functionalities: rendering, adding todos, and toggling todo status.

## Micro Frontend Considerations:

Designed the component to be easily integrated into other applications.
Focused on encapsulating the todo list functionality to minimize dependencies on the host application.

## Edge Cases and Error Handling

## LocalStorage Availability:

Added a check to gracefully handle cases where localStorage is unavailable.

## Invalid Input:

Prevented adding empty todo tasks.

## Unique IDs:

Used Date.now() to generate unique IDs for todos.

## Future Improvements

Add more comprehensive tests to cover edge cases.
Enhance the UI with better styling and user experience.
Implement more advanced state management if the application scales.
Optimize performance for large todo lists.
Contact
For any questions or feedback, please reach out to [alvarom24@gmail.com].
