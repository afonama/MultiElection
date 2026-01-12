import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useOutletContext } from 'react-router-dom';
import { IoAddOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../redux/ui-slice';
import AddCandidateModal from '../components/AddCandidateModal';

const ElectionDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { elections, setElections, allVoters, setAllVoters } = useOutletContext();
  const [hasVotedInThisElection, setHasVotedInThisElection] = useState(false);

  // ✅ Get the signed-in voter dynamically
  const currentVoter = JSON.parse(localStorage.getItem("currentUser"));
  const currentVoterEmail = currentVoter?.email;

  const electionIdStr = id.toString();

  // Check if current voter has voted in this election
  useEffect(() => {
    if (!currentVoterEmail) return;
    const voterKey = `voted-${currentVoterEmail}-${electionIdStr}`;
    const voted = localStorage.getItem(voterKey) === "true";
    setHasVotedInThisElection(voted);
  }, [electionIdStr, currentVoterEmail]);

  const currentElection = elections.find(e => e.id.toString() === electionIdStr);
  if (!currentElection) return <p>Election not found</p>;

  const electionCandidates = currentElection.candidates || [];

  // Filter voters for this election
  const currentElectionVoters = allVoters.filter(voter => voter.electionId === electionIdStr);

  const addCandidateModalShowing = useSelector(state => state.ui.addCandidateModalShowing);
  const openModal = () => dispatch(uiActions.openAddCandidateModal());

  const handleVoteClick = (candidate) => {
    if (hasVotedInThisElection) return;
    navigate(`/ConfirmVote/${electionIdStr}/${candidate.id}`);
  };

  const handleResetVotes = () => {
    const confirmed = window.confirm("Are you sure you want to reset all votes for this election? This cannot be undone.");
    if (!confirmed) return;

    const updatedElections = elections.map(e => {
      if (e.id.toString() === electionIdStr) {
        const resetCandidates = e.candidates.map(c => ({ ...c, votes: 0 }));
        return { ...e, candidates: resetCandidates, totalVotes: 0 };
      }
      return e;
    });
    setElections(updatedElections);

    const remainingVoters = allVoters.filter(v => v.electionId !== electionIdStr);
    setAllVoters(remainingVoters);

    // Clear localStorage for all voters in this election
    currentElectionVoters.forEach(v => {
      localStorage.removeItem(`voted-${v.email}-${electionIdStr}`);
    });

    setHasVotedInThisElection(false);
  };

  return (
    <>
      <section className="electionDetails">
        <div className="container electionDetails__container">
          <h2>{currentElection.title}</h2>
          <p>{currentElection.description}</p>
          <div className="electionDetails__image">
            <img src={currentElection.thumbnail} alt={currentElection.title} />
          </div>
{/* 
          <button
            className="btn reset-btn"
            style={{ marginBottom: "1rem", backgroundColor: "#ff4d4f", color: "#fff" }}
            onClick={handleResetVotes}
          >
            Reset Votes
          </button> */}

          <div className="registered-candidates">
            <h3>Registered Candidates</h3>
            {electionCandidates.map(c => (
              <div key={c.id} className="candidate-card">
                <div className="candidate-card-info">
                  <img src={c.image} alt={c.name} />
                  <div>
                    <strong>{c.name}</strong>
                    <div>{c.party}</div>
                  </div>
                </div>
                <span className="candidate-votes">{c.votes.toLocaleString()} Votes</span>
                <button 
                  className={`candidate-vote-btn ${hasVotedInThisElection ? 'disabled' : ''}`} 
                  onClick={() => handleVoteClick(c)}
                  disabled={hasVotedInThisElection}
                  style={{
                    backgroundColor: hasVotedInThisElection ? "#444" : "#007bff",
                    cursor: hasVotedInThisElection ? "not-allowed" : "pointer",
                    pointerEvents: hasVotedInThisElection ? "none" : "auto",
                    opacity: hasVotedInThisElection ? 0.6 : 1
                  }}
                >
                  {hasVotedInThisElection ? "Voted" : "Vote"}
                </button>
              </div>
            ))}
            <h4 className="total-votes">Total Votes: {currentElection.totalVotes?.toLocaleString() || 0}</h4>
          </div>

          <button className="add_candidate-btn" onClick={openModal}><IoAddOutline /></button>
          
          <menu className="voters">
            <h2>VOTERS</h2>
            <table className="voters__table">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email Address</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {currentElectionVoters.length > 0 ? (
                  currentElectionVoters.map((voter, index) => (
                    <tr key={index}>
                      <td><h5>{voter.fullName}</h5></td>
                      <td><h6>{voter.email}</h6></td>
                      <td><h6>{voter.time}</h6></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" style={{ textAlign: 'center', padding: '2rem' }}>
                      No votes have been cast in this election yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </menu>
        </div>
      </section>

      {addCandidateModalShowing && <AddCandidateModal electionId={electionIdStr} />}
    </>
  );
};

export default ElectionDetails;

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams, useOutletContext } from 'react-router-dom';
// import { IoAddOutline } from 'react-icons/io5';
// import { useDispatch, useSelector } from 'react-redux';
// import { uiActions } from '../redux/ui-slice';
// import AddCandidateModal from '../components/AddCandidateModal';

// const ElectionDetails = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   const { elections, setElections, allVoters, setAllVoters } = useOutletContext();

//   const [hasVotedInThisElection, setHasVotedInThisElection] = useState(false);

//   const currentVoterEmail = "emeka.okafor@example.com"; // Replace with dynamic auth if needed
//   const electionIdStr = id.toString();

//   // Check if voter has voted in THIS specific election
//   useEffect(() => {
//     const voterKey = `voted-${currentVoterEmail}-${electionIdStr}`;
//     const voted = localStorage.getItem(voterKey) === "true";
//     setHasVotedInThisElection(voted);
//   }, [electionIdStr]);

//   const currentElection = elections.find(e => e.id.toString() === electionIdStr);
//   if (!currentElection) return <p>Election not found</p>;

//   const electionCandidates = currentElection?.candidates || [];

//   // Filter voters for this specific election
//   const currentElectionVoters = allVoters.filter(voter => voter.electionId === electionIdStr);

//   const addCandidateModalShowing = useSelector(state => state.ui.addCandidateModalShowing);

//   const openModal = () => {
//     dispatch(uiActions.openAddCandidateModal());
//   };

//   const handleVoteClick = (candidate) => {
//     if (hasVotedInThisElection) return;
//     navigate(`/ConfirmVote/${electionIdStr}/${candidate.id}`);
//   };

//   // --- RESET VOTES FUNCTION ---
//   const handleResetVotes = () => {
//     const confirmed = window.confirm(
//       "Are you sure you want to reset all votes for this election? This cannot be undone."
//     );
//     if (!confirmed) return;

//     // Reset candidate votes
//     const updatedElections = elections.map(e => {
//       if (e.id.toString() === electionIdStr) {
//         const resetCandidates = e.candidates.map(c => ({ ...c, votes: 0 }));
//         return { ...e, candidates: resetCandidates, totalVotes: 0 };
//       }
//       return e;
//     });
//     setElections(updatedElections);

//     // Remove all voter logs for this election
//     const remainingVoters = allVoters.filter(v => v.electionId !== electionIdStr);
//     setAllVoters(remainingVoters);

//     // Clear localStorage flags for this election
//     const voteKey = `voted-${currentVoterEmail}-${electionIdStr}`;
//     localStorage.removeItem(voteKey);

//     // Reset local state
//     setHasVotedInThisElection(false);
//   };

//   return (
//     <>
//       <section className="electionDetails">
//         <div className="container electionDetails__container">
//           <h2>{currentElection.title}</h2>
//           <p>{currentElection.description}</p>
//           <div className="electionDetails__image">
//             <img src={currentElection.thumbnail} alt={currentElection.title} />
//           </div>

//           {/* --- RESET BUTTON --- */}
//           <button
//             className="btn reset-btn"
//             style={{ marginBottom: "1rem", backgroundColor: "#ff4d4f", color: "#fff" }}
//             onClick={handleResetVotes}
//           >
//             Reset Votes
//           </button>

//           <div className="registered-candidates">
//             <h3>Registered Candidates</h3>
//             {electionCandidates.map(c => (
//               <div key={c.id} className="candidate-card">
//                 <div className="candidate-card-info">
//                   <img src={c.image} alt={c.name} />
//                   <div>
//                     <strong>{c.name}</strong>
//                     <div>{c.party}</div>
//                   </div>
//                 </div>
//                 <span className="candidate-votes"> {c.votes.toLocaleString()} Votes</span>
//                 <button 
//                   className={`candidate-vote-btn ${hasVotedInThisElection ? 'disabled' : ''}`} 
//                   onClick={() => handleVoteClick(c)}
//                   disabled={hasVotedInThisElection}
//                   style={{
//                     backgroundColor: hasVotedInThisElection ? "#444" : "#007bff",
//                     cursor: hasVotedInThisElection ? "not-allowed" : "pointer",
//                     pointerEvents: hasVotedInThisElection ? "none" : "auto",
//                     opacity: hasVotedInThisElection ? 0.6 : 1
//                   }}
//                 >
//                   {hasVotedInThisElection ? "Voted" : "Vote"}
//                 </button>
//               </div>
//             ))}
//             <h4 className="total-votes"> Total Votes: {currentElection.totalVotes?.toLocaleString() || 0}</h4>
//           </div>

//           <button className="add_candidate-btn" onClick={openModal}><IoAddOutline /></button>
          
//           <menu className="voters">
//             <h2>VOTERS</h2>
//             <table className="voters__table">
//               <thead>
//                 <tr>
//                   <th>Full Name</th>
//                   <th>Email Address</th>
//                   <th>Time</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentElectionVoters.length > 0 ? (
//                   currentElectionVoters.map((voter, index) => (
//                     <tr key={index}>
//                       <td><h5>{voter.fullName}</h5></td>
//                       <td><h6>{voter.email}</h6></td>
//                       <td><h6>{voter.time}</h6></td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="3" style={{textAlign: 'center', padding: '2rem'}}>
//                       No votes have been cast in this election yet.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </menu>
//         </div>
//       </section>

//       {addCandidateModalShowing && <AddCandidateModal electionId={electionIdStr} />}
//     </>
//   );
// };

// export default ElectionDetails;
