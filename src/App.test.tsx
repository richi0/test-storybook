import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {container} = render(<App/>)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
});
