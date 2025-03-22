'use client';
import React, { useReducer } from 'react';

export default function Index() {
  const initialState = { count: 0 };
  const reducer = (initialState, action) => {
    switch (action.type) {
      case 'INCREMENT': {
        return { ...initialState, count: action.payload.count + 1 };
      }
      case 'DECREMENT': {
        return { ...initialState, count: action.payload.count - 1 };
      }
      default: {
        return initialState;
      }
    }
  };

  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: 'INCREMENT',
            payload: { count: counter.count },
          });
        }}
      >
        Increment
      </button>
      Current Value: {counter.count}
      <button
        onClick={() => {
          dispatch({
            type: 'DECREMENT',
            payload: { count: counter.count },
          });
        }}
      >
        Decrement
      </button>
    </div>
  );
}
