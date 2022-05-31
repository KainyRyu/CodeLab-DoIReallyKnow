import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, useLocation } from 'react-router-dom';
import '@testing-library/jest-dom';

import Routes from '../../pages/Routes';

describe('<Routes />', () => {
  it('renders component correctly', () => {
    const history = createMemoryHistory();
    history.push('/');

    const { container } = render(
      <Router location={history.location} navigator={history}>
        <Routes />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
  it('changes path', () => {
    const history = createMemoryHistory();
    history.push('/');

    const TestComponent = (): JSX.Element => {
      const { pathname } = useLocation();
      return (
        <div>
          <div>{pathname}</div>
          <Routes />
        </div>
      );
    };

    render(
      <Router location={history.location} navigator={history}>
        <TestComponent />
      </Router>
    );

    const pathName = screen.getByText('/');
    expect(pathName).toBeInTheDocument();
  });
});
