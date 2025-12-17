import { createSlice } from "@reduxjs/toolkit";

const currentVoter = {id: "v1", token: "uhvuhok", isAdmin: true}
const initialState = {selectedVoteCandidate: "", currentVoter, selectedElection: "", idOfElectionUpdate: "", addCandidateElectionId: "", }
const voteSlice = createSlice({
    name: "vote",
    initialState,
    reducers: {
        changeSelectedVoteCandidate(state, action){
            state.selectedVoteCandidate = action.payload;
        },
        changeSelectedElection(state, action){
            state.selectedElection = action.payload;
        },
        changeOfCandidateElectionId(state, action) {
            state.changeOfCandidateElectionId = action.payload;
        },
        changeAddCandidateElectionId(state, action) {
            state.changeAddCandidateElectionId = action.payload
        },

    }
})
export const voteActions = voteSlice.actions;
export default voteSlice