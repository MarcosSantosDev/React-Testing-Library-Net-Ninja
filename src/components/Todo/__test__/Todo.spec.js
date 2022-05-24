import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo'

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  )
}

const addTaskList = (taskList) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole('button', { name: 'Add' });

  taskList.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task }
    })
    fireEvent.click(buttonElement);
  })
}

describe('Todo', () => {
  it('Should render input element', () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: 'Add' });
    fireEvent.change(inputElement, {
      target: { value: 'Clean my hands' }
    })
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/clean my hands/i)
    expect(divElement).toBeInTheDocument();
  })

  it('Should add multiple tasks to the list', () => {
    render(<MockTodo />);
    const tasks = ['Clean my hands', 'Read a book'];
    addTaskList(tasks)

    const divElements = screen.getAllByTestId('todoListItem')
    expect(divElements.length).toBe(2);
  })

  it('Task should not have completed class when initally redenred', () => {
    render(<MockTodo />);
    const tasks = ['Clean my hands', 'Read a book'];
    addTaskList(tasks)
    const divElement = screen.getByText(/Clean my hands/i)
    expect(divElement).not.toHaveClass('todo-item-active');
  })

  it('Task should have completed class when clicked', () => {
    render(<MockTodo />);
    const tasks = ['Clean my hands', 'Read a book'];
    addTaskList(tasks)
    const divElement = screen.getByText(/Clean my hands/i)
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  })
})