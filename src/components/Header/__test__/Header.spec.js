import { render, screen } from '@testing-library/react';
import Header from '../Header'

describe('Header', () => {
    // GET BY
    it('Should render same text passed into title prop', () => {
        render(<Header title="Todo 2" />);
        const header = screen.getByText(/Todo 2/i);        
        expect(header).toBeInTheDocument();
    })

    // it('should render exactly "Todo 2" in the Header component', () => {
    //     render(<Header title="Todo 2" />);
    //     const header = screen.getByTestId('header-1', {
    //         exact: true
    //     });
    //     expect(header).toHaveTextContent('Todo 2')
    // })
    // // FIND BY
    // it('should render "Todo" in the Header component', async () => {
    //     render(<Header title="Todo" />);
    //     const header = await screen.findByRole('heading', { name: 'Todo' });
        
    //     expect(header).toBeInTheDocument()
    // })
    // // Query BY
    // it('should not render "dogs" in the Header component', () => {
    //     render(<Header title="Todo" />);
    //     const header = screen.queryByText(/dogs/i);
        
    //     expect(header).not.toBeInTheDocument()
    // })

    // // GET ALL
    // it('should render 2 heading in the Header component', () => {
    //     render(<Header title="Todo" />);
    //     const header = screen.getAllByRole('heading');
        
    //     expect(header.length).toEqual(2)
    // })
})