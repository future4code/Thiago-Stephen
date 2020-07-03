import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("tarefa aparece quando criar tarefa é clicado", async () => {
  const { getByText } = render(<App />)
  const handleCreateTask = getByText(/Criar tarefa/i)
  fireEvent.click(handleCreateTask)
  expect(getByText(/tarefa/i)).toHaveTextContent('tarefa')
})