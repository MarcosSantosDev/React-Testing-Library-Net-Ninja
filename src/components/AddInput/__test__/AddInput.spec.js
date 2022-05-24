import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput'

const mockSetTodo = jest.fn();

describe('AddInput', () => {
    it('Should render input element', () => {
        render(<AddInput
        todos={[]}
        setTodos={mockSetTodo}
        />);

        const inputElement = screen.getByPlaceholderText(/Add a new task here.../);
        expect(inputElement).toBeInTheDocument();
    })


    it('Should be able type in input', () => {
        render(<AddInput
        todos={[]}
        setTodos={mockSetTodo}
        />);

        const inputElement = screen.getByPlaceholderText(/Add a new task here.../);

        fireEvent.change(inputElement, {
            target: {
                value: 'Novo',
            }
        })

        expect(inputElement).toHaveValue('Novo');
    })

    it('Should have empty input when add button is clicked', () => {
        render(<AddInput
        todos={[]}
        setTodos={mockSetTodo}
        />);

        const inputElement = screen.getByPlaceholderText(/Add a new task here.../);
        const buttonElement = screen.getByRole('button');

        fireEvent.change(inputElement, {
            target: {
                value: 'Novo',
            }
        })

        fireEvent.click(buttonElement);
        expect(inputElement).toHaveValue('');
    })
})