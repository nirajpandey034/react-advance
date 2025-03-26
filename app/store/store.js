'use client';

import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './slices/counterSlice';
import { nameReducer } from './slices/nameSlice';

export const store = configureStore({
  reducer: { counterReducer: counterReducer, nameReducer: nameReducer },
});
