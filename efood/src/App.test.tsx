import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from './store';
import App from './App';

const theme = {
  colors: {
    primary: '#E66767',
    secondary: '#FFEBD9',
    white: '#FFFFFF',
    cream: '#FFF8F2',
    text: '#4B4B4B'
  }
}

test('renders efood app', () => {
  render(<App />);
  const headerElement = screen.getByText(/produto\(s\) no carrinho/i);
  expect(headerElement).toBeInTheDocument();
});
