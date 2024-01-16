import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tablegraphService from "./tableService";

// Async Thunk for fetching graph data
export const getGraphs = createAsyncThunk("table/get-tables", async (thunkAPI) => {
    try {
      return await tablegraphService.getGraphs();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
});

// Initial state
const initialState = {
  tablegraph: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// Redux slice
export const tableSlice = createSlice({
  name: "tablegraphs",
  initialState,
  reducers: {}, // You can add additional reducers here if needed
  extraReducers: (builder) => {
    builder
      .addCase(getGraphs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGraphs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.tablegraph = action.payload;
      })
      .addCase(getGraphs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload || "An error occurred";
      });
  },
});

// Export the reducer
export default tableSlice.reducer;
