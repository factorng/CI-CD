import { RenderResult, render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';
import React from 'react';


describe('Counter test', () => {
  let component: RenderResult;
  const value = 3;
  beforeEach(() => {
    component =  render(<Counter initialValue={value} />);
   });
  it('Should render counter component',  () => {
    screen.getByTestId('Counter');
  });
  it('Should have initial value', () => {
    expect(screen.getByTestId('CounterCount').textContent).toBe(value.toString());
  });
  it('should increase the value by clicking the button', async () => {
    const button = screen.getByRole('button', { name: 'increase' });
    fireEvent.click(button);
    await screen.findByText((value + 1).toString());
  });
  it('should decrease the value by clicking the button', async () => {
    const button = screen.getByRole('button', { name: 'decrease' });
    fireEvent.click(button);
    await screen.findByText((value - 1).toString());
  });
  
});
