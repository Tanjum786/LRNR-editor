import { configureStore } from "@reduxjs/toolkit";
import nodesReducer from "../Slice/NodesSlice"

export const store=configureStore({
    reducer:{
        nodes:nodesReducer
    }
})