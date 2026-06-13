import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

// middleware
const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log("Previous State:", storeAPI.getState());
  console.log("Action:", action);

  const result = next(action);

  console.log("Next State:", storeAPI.getState());

  return result;
};

//store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
