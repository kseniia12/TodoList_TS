import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  filter: string
}
const initialState: IInitialState = {
  filter: "All",
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
