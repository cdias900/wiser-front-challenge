/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import CustomInput from '../components/CustomInput';

describe('CustomInput', () => {
  it('should render without crashing', () => {
    render(<CustomInput onChange={() => {}} label="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  it('should render error message', () => {
    render(<CustomInput onChange={() => {}} label="Test" error errorMsg="Test error message" />);
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });
});
