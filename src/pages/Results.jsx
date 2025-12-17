import React, { useState } from "react";
import { elections } from "../Data";

const Results = () => {
  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen(open === id ? null : id);
  return (
      <section className="results-section">
      <div className="results-wrapper">
        <h2 className="results-title">🗳️ Election Results</h2>
        <div className="results-grid">
          {elections.map((e) => { const total = e.totalVotes ?? e.candidates.reduce((s, c) => s + (c.votes || 0), 0);
            const isOpen = open === e.id;
            return (
              <article key={e.id} aria-expanded={isOpen} className="results-card" >
                <div className="results-card-header">
                  <div className="results-card-header-left">
                    <h3>{e.title}</h3>
                    {e.description && <p>{e.description}</p>}
                    <span className={`results-card-status ${ e.status === "completed" ? "status-completed" : e.status === "ongoing" ? "status-ongoing"  : "status-pending" }`}> {e.status}
                    </span>
                  </div>
                  <div className="i">
                    <button onClick={() => toggle(e.id)} className="results-card-button" aria-controls={`${e.id}-content`} aria-expanded={isOpen}> {isOpen ? "Hide Results" : "Enter Election"}</button>
                  </div>
                </div>
                <div id={`${e.id}-content`} className={`results-card-content ${isOpen ? "open" : ""}`}>
                  <div className="results-card-content-inner">{e.candidates.map((c) => {const pct = total > 0 ? (c.votes / total) * 100 : 0;
                      const pctRounded = Math.round(pct * 10) / 10;
                      return (
                        <div key={c.id} className="candidate-row">
                          <div className="candidate-info">
                            <img src={c.image} alt={c.name} />
                            <div>
                              <div className="candidate-name">{c.name}</div>
                              <div className="candidate-party">{c.party}</div>
                            </div>
                          </div>
                          <div className="vote-bar-wrapper">
                            <div className="vote-bar-header">
                              <div className="votes">{c.votes.toLocaleString()}</div>
                              <div className="pct">{pctRounded}%</div>
                            </div>
                            <div className="vote-bar-bg" aria-hidden>
                              <div className="vote-bar-fill" style={{ width: `${pct}%` }} /></div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="results-total"> Total Votes: {total.toLocaleString()}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
  
export default Results;
