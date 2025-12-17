import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import voteSlice from "./voteSlice";
import votingReducer from "./votingSlice"
const store = configureStore({
    reducer: { ui: uiSlice.reducer, vote: voteSlice.reducer, voting: votingReducer}
});

export default store;
