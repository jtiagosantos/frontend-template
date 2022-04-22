import { render } from '@testing-library/react';
import Home from '@/pages';

describe('Home page tests', () => {
  it('renders correctly text', () => {
    const { getByText } = render(<Home />);

    const text = getByText('Front-end template');

    expect(text).toBeInTheDocument();
  });
});
