import { configureStore } from '@reduxjs/toolkit';
import registerReducer from "../features/regiter/RegisterSlice"

export const store = configureStore({
  reducer: {
    register: registerReducer,
  },
});
