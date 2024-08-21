import { configureStore } from "@reduxjs/toolkit";

import { boardsApi } from "../boards/api/boardsApi";
import { boardsReducer } from "../boards/rdx/boards.rdx";


const setupStore = () => {
  return configureStore({
    reducer: {
      // states
      boards: boardsReducer,

      //api
      [boardsApi.reducerPath]: boardsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        boardsApi.middleware,
      ]),
  });
};

const store = setupStore();

export { store };