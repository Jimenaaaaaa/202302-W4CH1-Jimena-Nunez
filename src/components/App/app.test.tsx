import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('Given the App function', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Farytale/);
    expect(linkElement).toBeInTheDocument();
  });
});
