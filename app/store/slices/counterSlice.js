import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (initialState) => {
      initialState.counter += 1;
    },
    decrement: (initialState) => {
      initialState.counter -= 1;
    },
    incrementByAmount: (initialState, action) => {
      initialState.counter += action.payload;
    },
    reset: (initialState) => {
      initialState.counter = 0;
    },
  },
});

// export actions
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

// export reducer
export const counterReducer = counterSlice.reducer;
