import React from "react";
import { uiActions } from "../redux/ui-slice";
import { useDispatch } from "react-redux";
import { voteActions } from "../redux/voteSlice";
const Candidate = ({image, id, fullName, motto}) => {
    const dispatch = useDispatch()
        const openCandidateModal = () => {
            dispatch(uiActions.openVoteCandidateModal())
            dispatch(voteActions.changeSelectedVoteCandidate(id))
        }
    return(
        <article className="candidate">
            <div className="candidate__image">
                <img src={image} alt={fullName} />
            </div>
            {/* <h5>{fullName?.length < 20 fullName.substring(0, 2)} + "..." : {fullName}</h5> */}
            {/* <small> {motto?.length < 20 fullName.substring(0, 2)} + "..." : {fullName}</small> */}
            <button className="btn__primary" onClick={openCandidateModal}>Vote</button>
        </article>
    )
}
export default Candidate