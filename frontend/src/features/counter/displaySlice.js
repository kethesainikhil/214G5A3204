import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNumbers } from './displayAPI';

const initialState = {
  value: 0,
  status: 'idle',
  answer:[]
};

export const getNumberAsync = createAsyncThunk(
  'display/get',
  async (params) => {
    const response = await getNumbers(params);
    return response.data;
  }
);

export const numbersSlice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    increment: (state) => {
      
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getNumberAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getNumberAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(typeof state.answer)
        console.log(typeof action.payload)
        state.answer = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = numbersSlice.actions;


export const getValues = (state) => state.number.answer;


export default numbersSlice.reducer;
