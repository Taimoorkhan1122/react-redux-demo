import { render } from '@testing-library/react';
import App from './App';

test('renders CakeCount components', () => {
  
  const {getByTestId} = render(<App/>);
  expect(getByTestId('cake-count')).toBeInTheDocument();
});
