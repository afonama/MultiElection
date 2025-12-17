// redux/votingSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { elections } from '../Data'; 

// Create a copy of elections with votes in state
const initialState = elections.map(election => ({
  id: election.id,
  candidates: election.candidates.map(c => ({ ...c })), // copy to allow vote increment
}));

const votingSlice = createSlice({
  name: 'voting',
  initialState,
  reducers: {
    voteCandidate: (state, action) => {
      const { electionId, candidateId } = action.payload;

      // Find the election
      const election = state.find(e => e.id === electionId);
      if (election) {
        
        const candidate = election.candidates.find(c => c.id === candidateId);
        if (candidate) {
          candidate.votes += 1; 
        }
      }
    },
  },
});

export const { voteCandidate } = votingSlice.actions;
export default votingSlice.reducer;
