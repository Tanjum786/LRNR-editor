import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nodeContainer: []
};
const NodesSlice = createSlice({
  name: "nodeContainer",
  initialState,
  reducers: {
    addNode: (state, action) => {
      state.nodeContainer = [...state.nodeContainer,action.payload];
    },
  },
});
export const { addNode } = NodesSlice.actions;

export default NodesSlice.reducer;
