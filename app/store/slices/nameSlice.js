import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  names: [],
  status: 'idle',
  error: null,
};

export const getDataFromAPI = createAsyncThunk(
  'name/getDataFromAPI',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const names = data.map((user) => user.name);
    return names;
  }
);

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    addName: (initialState, action) => {
      initialState.names.push(action.payload);
    },
    removeName: (initialState, action) => {
      initialState.names = initialState.names.filter(
        (name) => name !== action.payload
      );
    },
    resetName: (initialState) => {
      initialState.names = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromAPI.pending, (state) => {
        state.names = [];
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getDataFromAPI.fulfilled, (state, action) => {
        state.names = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(getDataFromAPI.rejected, (state, action) => {
        initialState.names = [];
        initialState.status = 'failed';
        initialState.error = action.error.message;
      });
  },
});

export const { addName, removeName, resetName } = nameSlice.actions;

export const nameReducer = nameSlice.reducer;
