import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "boardRdx",
  initialState: {
    selectedBoard: {},
  },
  reducers: {
    setSelectedBoard(state, action) {
      state.selectedBoard = { ...action.payload };
    },

    resetSelectedBoard(state, action) {
      state.selectedBoard = {};
    },
  },
});

export const rdxBoardsActions = boardSlice.actions;
export const boardsReducer = boardSlice.reducer;