'use client';
import React, { useContext } from 'react';
import { ThemeContext } from './index';

export default function Dashboard() {
  const { state, dispatch } = useContext(ThemeContext);
  return (
    <div>
      <button
        onClick={() =>
          state.theme === 'light'
            ? dispatch({ type: 'DARK' })
            : dispatch({ type: 'LIGHT' })
        }
      >
        {state.theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
      </button>
      Current theme: {state.theme}
    </div>
  );
}
