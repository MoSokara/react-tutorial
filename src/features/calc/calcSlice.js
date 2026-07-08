import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    addition: (state, action) => {
      state.value = action.payload.firstNumber + action.payload.secondNumber;
    },
    subtraction: (state, action) => {
      state.value = action.payload.firstNumber - action.payload.secondNumber;
    },
    multiplication: (state, action) => {
      state.value = action.payload.firstNumber * action.payload.secondNumber;
    },
    division: (state, action) => {
      state.value = action.payload.firstNumber / action.payload.secondNumber;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addition, subtraction, multiplication, division } =
  calcSlice.actions;

export default calcSlice.reducer;
