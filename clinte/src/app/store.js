import { configureStore } from "@reduxjs/toolkit";
import linegrapgReducer from "../features/linegraph/linegraphSlice";
import piegraphReducer from "../features/piegraph/piegraphSlice";
import tableReducer from "../features/table/tableSlice";
export const store = configureStore({
    reducer: {
      linegraph: linegrapgReducer,
      piegraph: piegraphReducer,
      table: tableReducer
    },
  });