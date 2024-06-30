import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '../reducers/counterReducer';
const store = configureStore({
  reducer: {
    counter: CounterReducer
  },
});

export default store;
