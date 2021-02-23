/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import Home from '../pages';

describe('Home', () => {
  it('should render without crashing', () => {
    render(<Home />);
    expect(screen.getByRole('button', { name: 'ENTRAR' })).toBeInTheDocument();
  });
});
