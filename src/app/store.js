import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/forms/formsSlice';

export const store = configureStore({
  reducer: {
    forms: formReducer,
  },
});
