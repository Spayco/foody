import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../../components/NavBar';

describe('NavBar', () => {
  it('renders logo text', () => {
    const { getByText } = render(
      <NavBar />,
    );
    const logo = getByText(/Foody/i);
    expect(logo).toBeInTheDocument();
  });
  it('renders creadit', () => {
    const { getByText } = render(
      <NavBar />,
    );
    const creadit = getByText(/By SpaYco/i);
    expect(creadit).toBeInTheDocument();
  });

  it('renders an text input', () => {
    const { queryAllByTestId } = render(
      <NavBar />,
    );
    const text = queryAllByTestId('search-bar');
    expect(text).toBeTruthy();
  });
  it('renders creadit', () => {
    const { queryAllByTestId } = render(
      <NavBar />,
    );
    const btn = queryAllByTestId('search-btn');
    expect(btn).toBeTruthy();
  });
});
