import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { elections, candidates, voters } from '../Data'
import { IoAddOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../redux/ui-slice'
import AddCandidateModal from '../components/AddCandidateModal'
import ConfirmVote from '../components/ConfirmVote' 

const ElectionDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentElection = elections.find(e => e.id == id)
  const electionCandidates = candidates.filter(c => c.election == id)
  const addCandidateModalShowing = useSelector(state => state.ui.addCandidateModalShowing)
  const [showConfirmVote, setShowConfirmVote] = useState(false)
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const openModal = () => {
    dispatch(uiActions.openAddCandidateModal())
  }
  const handleVoteClick = (candidate) => {
    setSelectedCandidate(candidate) // set the candidate for confirmation
    navigate(`/ConfirmVote/${candidate.id}`);
    setShowConfirmVote(true) // show the modal
    console.log('i worked')
  }

  const closeConfirmVote = () => {
    setShowConfirmVote(false)
    setSelectedCandidate(null)
  }

  return (
    <>
      <section className="electionDetails">
        <div className="container electionDetails__container">
          <h2>{currentElection.title}</h2>
          <p>{currentElection.description}</p>
          <div className="electionDetails__image">
            <img src={currentElection.thumbnail} alt={currentElection.title} />
          </div>

          <menu className="electionDetails__candidates">
            {electionCandidates.map(candidate => (
              <div key={candidate.id} className="candidate-card">
                <div className="candidate-card-info">
                  <img src={candidate.image} alt={candidate.name} />
                  <div>
                    <strong>{candidate.name}</strong>
                    <div>{candidate.party}</div>
                  </div>
                </div>
                <span className="candidate-votes">{candidate.votes.toLocaleString()} Votes</span>
                <button className="candidate-vote-btn" onClick={() => handleVoteClick(candidate)}>Vote</button>
              </div>
            ))}
          </menu>

          {currentElection.candidates?.length > 0 && (
            <div className="registered-candidates">
              <h3>Registered Candidates</h3>
              {currentElection.candidates.map(c => (
                <div key={c.id} className="candidate-card">
                  <div className="candidate-card-info">
                    <img src={c.image} alt={c.name} />
                    <div>
                      <strong>{c.name}</strong>
                      <div>{c.party}</div>
                    </div>
                  </div>
                  <span className="candidate-votes"> {c.votes.toLocaleString()} Votes</span>
                  <button className="candidate-vote-btn" onClick={() => handleVoteClick(c)}>Vote
                  </button>
                </div>
              ))}
              <h4 className="total-votes">
                Total Votes: {currentElection.totalVotes?.toLocaleString() || 0}
              </h4>
            </div>
          )}

          <button className="add_candidate-btn" onClick={openModal}>
            <IoAddOutline />
          </button>

          <menu className="voters">
            <h2>Voters</h2>
            <table className="voters__table">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email Address</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {voters.map(voter => (
                  <tr key={voter.id}>
                    <td><h5>{voter.fullName}</h5></td>
                    <td><h6>{voter.email}</h6></td>
                    <td><h6>14:33:32</h6></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </menu>
        </div>
      </section>

      {addCandidateModalShowing && <AddCandidateModal />}

      {/* ConfirmVote modal */}
      {showConfirmVote && selectedCandidate && (
        <ConfirmVote
          candidate={selectedCandidate}
          onClose={closeConfirmVote}
        />
      )}
    </>
  )
}

export default ElectionDetails
