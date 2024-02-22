import React, {useState} from 'react';

export const Counter = ({initialValue}: {initialValue: number}) => {
  const [counter, setCounter] = useState(initialValue);
  return (
    <div data-testid="Counter">
      <h3>Counter</h3>
      <p data-testid="CounterCount">{counter}</p>
      <button data-testid="CounterButtonPlus" onClick={() => setCounter(prev => prev + 1)}>increase</button>
      <button data-testid="CounterButtonMinus" onClick={() => setCounter(prev => prev - 1)}>decrease</button>
    </div>
  );
}

