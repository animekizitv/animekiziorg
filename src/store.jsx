import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {
  value: {},
  page: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      set(state,action){
        state.value = action.payload;
      },
      setActivePage(state,action){
        state.page = action.payload;
      }
    },
})

let store = configureStore({
    reducer:counterSlice.reducer
});

export const {set, setActivePage} = counterSlice.actions;

export default store;
