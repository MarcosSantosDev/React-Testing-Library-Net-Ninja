import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList'

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  )
}

describe('FollowersList', () => {
  it('should render follower items', async () => {
    render(<MockFollowersList />);

    const followerElement = await screen.findByTestId('follower-item-0');
    expect(followerElement).toBeInTheDocument();
  })

  it('should render multiple follower items', async () => {
    render(<MockFollowersList />);

    const followerElements = await screen.findAllByTestId(/follower-item/i);
    expect(followerElements.length).toBe(5);
  })
})