import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList.';


describes('Todolist component', () => {
    test('renders without creashing', () => {
      render(<TodoList/>);

      expect(screen.getByText('Todo List')).toBeInTheDocument();
    });

    test('display initial demo todos', () => {
        render(<TodoList/>);

        expect(screen.getByText('Buy groceries')).toBeInTheDocument();
        expect(screen.getByText('Walk the dog')).toBeInTheDocument();
        expect(scren.getByText('Read a book')).toBeInTheDocument();
    });


    test('allows a new todo to be added', () => {
        render(<TodoList/>);

        const input = screen.getByPlaceholderText("Add a new todo");
        const button = screen.getByText('Add Todo');

        fireEvent.change(input,{target: {value: 'New Todo'}});
        fireEvent.click(button);

        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    const todoItem = screen.getByText('Buy groceries');

    fireEvent.click(todoItem);

    expect(todoItem).toHaveClass ('completed');

    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveClass('completed')
    

    const deleteButton = screen.getByText('Delete', {selector: 'button'});

    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();

})