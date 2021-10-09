import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CakeCount components', () => {
  render(<App />);
  const headiingElement = screen.getAllByTestId('cake-count');
  expect(headiingElement).toBeInTheDocument();
});
