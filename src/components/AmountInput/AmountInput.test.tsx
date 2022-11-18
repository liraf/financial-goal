import { render, screen, fireEvent } from '@testing-library/react';
import AmountInput from './AmountInput';

test('renders AmountInput in correct format small', () => {
  render(<AmountInput />)

  const inputElement = screen.getByTestId('html-input')

  fireEvent.input(inputElement, { target: { value: '2000' } })
  expect(inputElement).toHaveValue('2,000')
});

test('renders AmountInput in correct format big', () => {
  render(<AmountInput />)

  const inputElement = screen.getByTestId('html-input')

  fireEvent.input(inputElement, { target: { value: '2000000' } })
  expect(inputElement).toHaveValue('2,000,000')
});
