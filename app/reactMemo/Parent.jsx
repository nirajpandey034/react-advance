'use client';
import React, { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase Count
      </button>
      <p>Counter: {counter}</p>

      <Child />
    </div>
  );
}
