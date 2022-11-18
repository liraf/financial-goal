import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReachDateInput from './ReachDateInput';

test('renders ReachDateInput in next year', () => {
  render(<ReachDateInput />);

  const renderedMonth = new Date();
  renderedMonth.setMonth(renderedMonth.getMonth() + 12);
  renderedMonth.setDate(1);

  const inputElement = screen.getByTestId('html-input');
  expect(inputElement).toHaveValue(renderedMonth.toDateString());
});

test('go back one month by clicking', () => {
  render(<ReachDateInput />);

  const goBackButton = screen.getByTestId('month-back');
  fireEvent.click(goBackButton);

  const renderedMonth = new Date();
  renderedMonth.setMonth(renderedMonth.getMonth() + 11);
  renderedMonth.setDate(1);

  const inputElement = screen.getByTestId('html-input');
  expect(inputElement).toHaveValue(renderedMonth.toDateString());
});

test('go back one month by keyboard', () => {
  render(<ReachDateInput />);

  const monthLabelToFocus = screen.getByTestId('month-label');
  fireEvent.click(monthLabelToFocus); // Focus on element
  fireEvent.keyDown(monthLabelToFocus, { code: 'ArrowLeft' });

  const renderedMonth = new Date();
  renderedMonth.setMonth(renderedMonth.getMonth() + 11);
  renderedMonth.setDate(1);

  const inputElement = screen.getByTestId('html-input');
  expect(inputElement).toHaveValue(renderedMonth.toDateString());
});

test('go up one month by clicking', () => {
  render(<ReachDateInput />);

  const goAheadButton = screen.getByTestId('month-ahead');
  fireEvent.click(goAheadButton);

  const renderedMonth = new Date();
  renderedMonth.setMonth(renderedMonth.getMonth() + 13);
  renderedMonth.setDate(1);

  const inputElement = screen.getByTestId('html-input');
  expect(inputElement).toHaveValue(renderedMonth.toDateString());
});

test('go up one month by keyboard', () => {
  render(<ReachDateInput />);

  const monthLabelToFocus = screen.getByTestId('month-label');
  fireEvent.click(monthLabelToFocus); // Focus on element
  fireEvent.keyDown(monthLabelToFocus, { code: 'ArrowRight' });

  const renderedMonth = new Date();
  renderedMonth.setMonth(renderedMonth.getMonth() + 13);
  renderedMonth.setDate(1);

  const inputElement = screen.getByTestId('html-input');
  expect(inputElement).toHaveValue(renderedMonth.toDateString());
});

test('do not allow go up or back by keyboard when is not focused', () => {
  render(<ReachDateInput />);

  fireEvent.click(document); // Focus outside input
  fireEvent.keyDown(document, { code: 'ArrowRight' });
  fireEvent.keyDown(document, { code: 'ArrowBack' });

  const renderedMonth = new Date();
  renderedMonth.setMonth(renderedMonth.getMonth() + 12);
  renderedMonth.setDate(1);

  const inputElement = screen.getByTestId('html-input');
  expect(inputElement).toHaveValue(renderedMonth.toDateString());
});

test('do not allow go to previous months than today', async () => {
  render(<ReachDateInput />);

  const goBackButton = screen.getByTestId('month-back');

  for (let i = 0; i <= 15; i++) await fireEvent.click(goBackButton);

  const renderedMonth = new Date();
  renderedMonth.setMonth(renderedMonth.getMonth() + 1); // Should be still one month ahead after 15 clicks
  renderedMonth.setDate(1);

  const inputElement = screen.getByTestId('html-input');
  expect(inputElement).toHaveValue(renderedMonth.toDateString());
});
