import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import piegraphService from "./piegraphService";

// Async Thunk for fetching graph data
export const getGraphs = createAsyncThunk("piegraph/get-piegraphs", async (thunkAPI) => {
    try {
      return await piegraphService.getGraphs();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
});

// Initial state
const initialState = {
  piegraph: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// Redux slice
export const piegraphSlice = createSlice({
  name: "piegraphs",
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
        state.piegraph = action.payload;
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
export default piegraphSlice.reducer;
