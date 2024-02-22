import React, {useState} from 'react';
import { Counter } from './Counter';

export const App = () => {
  return (
    <>
      <Counter initialValue={10} />
    </>
  );
}

