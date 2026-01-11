import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";

const ConfirmVote = () => {
  const { electionId, id: candidateId } = useParams();
  const navigate = useNavigate();
  const { elections, setElections, allVoters, setAllVoters } = useOutletContext();

  const [hasVoted, setHasVoted] = useState(false);

  // ✅ Get the signed-in voter dynamically
  const currentVoter = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentVoter) return <p>Please sign in to vote</p>;

  const electionIdStr = electionId?.toString();
  const candidateIdStr = candidateId?.toString();

  // Check if this voter has voted in this election
  useEffect(() => {
    setHasVoted(false);
    if (!currentVoter || !electionIdStr) return;

    const voteKey = `voted-${currentVoter.email}-${electionIdStr}`;
    const status = localStorage.getItem(voteKey);
    if (status === "true") setHasVoted(true);
  }, [electionIdStr, currentVoter.email]);

  const election = elections.find((e) => e.id.toString() === electionIdStr);
  const candidate = election?.candidates.find((c) => c.id.toString() === candidateIdStr);

  if (!election || !candidate) return <p>Election or Candidate not found</p>;

  const handleConfirm = () => {
    if (hasVoted) return;

    const voteKey = `voted-${currentVoter.email}-${electionIdStr}`;

    // Update candidate votes
    const updatedElections = elections.map((e) => {
      if (e.id.toString() === electionIdStr) {
        const updatedCandidates = e.candidates.map((c) =>
          c.id.toString() === candidateIdStr ? { ...c, votes: (c.votes || 0) + 1 } : c
        );
        return {
          ...e,
          candidates: updatedCandidates,
          totalVotes: updatedCandidates.reduce((sum, cand) => sum + cand.votes, 0),
        };
      }
      return e;
    });

    // Add voter log dynamically
    const newVoterLogEntry = {
      id: Date.now(),
      electionId: electionIdStr,
      fullName: currentVoter.fullName,
      email: currentVoter.email,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };

    setElections(updatedElections);
    setAllVoters((prev) => [newVoterLogEntry, ...prev]);

    // Save vote in localStorage
    localStorage.setItem(voteKey, "true");
    setHasVoted(true);

    navigate("/congrats");
  };

  return (
    <section className="confirm-vote-page">
      <div className="confirm__vote-content">
        <h5>Confirm Vote for {election.title}</h5>
        <div className="confirm__vote-image">
          <img src={candidate.image} alt={candidate.name} />
        </div>
        <h2>{candidate.name}</h2>
        <p>{candidate.party}</p>

        {hasVoted && (
          <p style={{ color: "red", fontWeight: "bold", background: "rgba(255,0,0,0.1)", padding: "10px", borderRadius: "5px" }}>
            You have already cast a vote in this election.
          </p>
        )}

        <div className="confirm__vote-cta">
          <button className="btn" onClick={() => navigate(-1)}>Cancel</button>
          <button 
            className="btn primary" 
            onClick={handleConfirm} 
            disabled={hasVoted}
            style={{
              backgroundColor: hasVoted ? "#333" : "",
              cursor: hasVoted ? "not-allowed" : "pointer",
              pointerEvents: hasVoted ? "none" : "auto",
              opacity: hasVoted ? 0.6 : 1
            }}
          >
            {hasVoted ? "Already Voted" : "Confirm Vote"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConfirmVote;
