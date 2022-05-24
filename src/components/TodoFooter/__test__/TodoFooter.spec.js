import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter'

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}

it('Should render amount of incomplete tasks', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);

    const paragraphElement = screen.getByText(/5 tasks left/i)
    expect(paragraphElement).toBeInTheDocument();
});


it('Should render "task" when the number of incomplete tasks is one', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toBeTruthy();
})

it('Should render "task" when the number of incomplete tasks is one', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toBeVisible();
})


it('Should render "task" when the number of incomplete tasks is one', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toContainHTML('p');
})


it('Should render "task" when the number of incomplete tasks is one', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toHaveTextContent('1 task left');
})


it('Should render "task" when the number of incomplete tasks is one', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement.textContent).toBe('1 task left');
})
