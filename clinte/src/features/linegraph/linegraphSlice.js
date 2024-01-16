import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import linegraphService from "./linegraphService";

// Async Thunk for fetching graph data
export const getGraphs = createAsyncThunk("graph/get-graphs", async (thunkAPI) => {
    try {
      return await linegraphService.getGraphs();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
});

// Initial state
const initialState = {
  graphs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// Redux slice
export const linegraphSlice = createSlice({
  name: "graphs",
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
        state.graphs = action.payload;
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
export default linegraphSlice.reducer;
