import { configureStore } from '@reduxjs/toolkit';
import NumberReducer from "../features/counter/displaySlice"

export const store = configureStore({
  reducer: {
    number: NumberReducer,
  },
});
