import React from 'react'
import { useParams } from 'react-router-dom'
import ConfirmVote from '../components/ConfirmVote';
import Candidate from '../components/Candidate';
import { useSelector } from 'react-redux';

const Candidates = () => {
    const {id} = useParams();
    const candidates = dumyCandidates.filter(candidate => candidate.election === id)
    const voteCandidateModalShowing = useSelector(state => state.ui.voteCandidateModalShowing)

  return (
    <>
    <section id="candidates">
        <section id="candidates__header">
            <h1>Vote your candidates</h1>
            <p> These are the candidates that are available for this election</p>
            {
                candidates.map(candidate => <Candidate key={candidate.id} {...candidate}/>)
            }
        </section>
    </section>
    { voteCandidateModalShowing && <ConfirmVote/>}
    </>
  )
}

export default Candidates
