// MFE 1 - Redux Store
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

const persistConfig = {
  key: 'localStorageKey',
  storage,
};

const persistedReducer = persistReducer(persistConfig, counterSlice.reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
