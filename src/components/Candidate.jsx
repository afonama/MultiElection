import React from "react";
import { uiActions } from "../redux/ui-slice";
import { useDispatch } from "react-redux";
import { voteActions } from "../redux/voteSlice";

const Candidate = ({image, id, fullName, motto, isVoted}) => {
    const dispatch = useDispatch()
    
    const openCandidateModal = () => {
        // Only allow opening the modal if the user hasn't voted yet
        if (!isVoted) {
            dispatch(uiActions.openVoteCandidateModal())
            dispatch(voteActions.changeSelectedVoteCandidate(id))
        }
    }

    return(
        <article className="candidate">
            <div className="candidate__image">
                <img src={image} alt={fullName} />
            </div>
            <h5>{fullName}</h5>
            <small>{motto}</small>
            
            <button 
                className={`btn__primary ${isVoted ? 'disabled' : ''}`} 
                onClick={openCandidateModal}
                disabled={isVoted} // Disables the HTML button
                style={{
                    backgroundColor: isVoted ? "#444" : "", // Grey out
                    cursor: isVoted ? "not-allowed" : "pointer",
                    pointerEvents: isVoted ? "none" : "auto", // Physically prevents the click
                    opacity: isVoted ? 0.6 : 1
                }}
            >
                {isVoted ? "Already Voted" : "Vote"}
            </button>
        </article>
    )
}

export default Candidate