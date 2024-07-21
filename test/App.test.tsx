/**
* @jest-environment jsdom
*/
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../src/App';

describe('App component', () => {
  test('renders with initial state', () => {
    const { container } = render(<App />);
    screen.debug(container);
    expect(container.getElementsByClassName('Title').length).toBe(1);
    expect(container.getElementsByClassName('Form').length).toBe(1);
    expect(container.getElementsByClassName('Result').length).toBe(1);
  });
});
