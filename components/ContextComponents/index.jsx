'use client';
import React, { createContext, useState, useReducer } from 'react';

// Create Context
const ThemeContext = createContext();

const initialState = {
  theme: 'light',
};
const reducer = (initialState, action) => {
  switch (action.type) {
    case 'LIGHT': {
      return { ...initialState, theme: 'light' };
    }
    case 'DARK': {
      return { ...initialState, theme: 'dark' };
    }
    default:
      return initialState;
  }
};
// ThemeProvider Component
const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
