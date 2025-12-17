import React from 'react'
import { IoMdTrash } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import {voteSlice} from '../redux/'
const ElectionCandidate = ({ id, name, party, votes, electionId }) => {
  const dispatch = useDispatch()
  const handleVote = () => {
    dispatch(voteCandidate({ electionId, candidateId: id }))
  }
  return (
    <li
  className="electionCandidate"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    width: "100%", // ensure full width
  }}
>
  <div>
    <h5 style={{ margin: 0 }}>{name}</h5>
    <small style={{ color: "#555" }}>{party}</small>
  </div>

  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flexShrink: 0, // prevent shrinking
    }}
  >
    <span
      style={{
        fontWeight: "bold",
        color: "#007bff",
        minWidth: "50px",
        textAlign: "right",
      }}
    >
      {(votes || 0).toLocaleString()}
    </span>
    <button
      className="electionCandidate__btn"
      style={{
        padding: "6px",
        border: "none",
        backgroundColor: "red",
        cursor: "pointer",
        display: "inline-block", // ensures visibility
        borderRadius: "5px",
      }}
    >
      <IoMdTrash />
    </button>
  </div>
</li>

  )
}

export default ElectionCandidate
