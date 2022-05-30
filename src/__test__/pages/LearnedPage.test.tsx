import { render } from '@testing-library/react';
import React from 'react';
import LearnedPage from '../../pages/LearnedPage';

describe('<LearnedPage />', () => {
  it('renders component correctly', () => {
    render(<LearnedPage />);
  });
});
