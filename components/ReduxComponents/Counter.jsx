'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from '../../app/store/slices/counterSlice';

export default function Counter() {
  const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Counter: {counter}</h1>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}
