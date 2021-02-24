/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import Text, { textTypes } from '../components/Text';

describe('Text', () => {
  it('should render without crashing', () => {
    render(<Text type={textTypes.TITLE} text={'Test\nTest2'} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Test2')).toBeInTheDocument();
  });
});
