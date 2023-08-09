import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { registerAccount } from './RegisterApi';

const initialState = {
  value: 0,
  status: 'idle',
  data:null
};

export const registerDetailsAsync = createAsyncThunk(
  'register/registerDetails',
  async (userData) => {
    const response = await registerAccount(userData);
    return response.data;
  }
);

export const RegisterSlice = createSlice({
  name: 'register',
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerDetailsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerDetailsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload
      })
  },
});

export const { increment, decrement, incrementByAmount } = RegisterSlice.actions;

export const configureDetails = (state) => state.register.data;

export default RegisterSlice.reducer;
