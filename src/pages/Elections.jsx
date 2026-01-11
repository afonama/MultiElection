import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; // 1. Use context instead of local state
import Election from '../components/Election';
import AddElectionModal from '../components/AddElectionModal';
import UpdateElectionModal from '../components/UpdateElectionModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../redux/ui-slice';

const Elections = () => {
  const dispatch = useDispatch();
  
  // 2. Get the LIVE elections from RootLayout context
  const { elections } = useOutletContext();
  
  const electionModalShowing = useSelector(state => state.ui.electionModalShowing);
  const updateElectionModalShowing = useSelector(state => state.ui.updateElectionModalShowing);
  
  const openModal = () => dispatch(uiActions.openElectionModal());

  // Keep track of voting status locally
  const [votedElections, setVotedElections] = useState({});

  useEffect(() => {
    const voted = {};
    const currentVoterEmail = "emeka.okafor@example.com"; 
    
    // Check voting status for the elections currently in view
    elections.forEach(e => {
      const voterKey = `voted-${currentVoterEmail}-${e.id}`;
      if (localStorage.getItem(voterKey)) {
        voted[e.id] = true;
      }
    });
    setVotedElections(voted);
  }, [elections]); // Re-run if elections list changes

  const markVoted = (electionId) => {
    const currentVoterEmail = "emeka.okafor@example.com";
    localStorage.setItem(`voted-${currentVoterEmail}-${electionId}`, "true");
    setVotedElections(prev => ({ ...prev, [electionId]: true }));
  };

  return (
    <>
      <section className="elections">
        <div className="container__elections__container">
          <header className="elections__header">
            <h1>Ongoing Elections</h1>
            <button className="btn primary" onClick={openModal}>Create New Election</button>
          </header>
          <menu className="elections__menu">
            {/* 3. This now maps over the live elections from RootLayout */}
            {elections.map(election => (
              <Election 
                key={election.id} 
                {...election} 
                disabled={!!votedElections[election.id]} 
                markVoted={() => markVoted(election.id)}
              />
            ))}
          </menu>
        </div>
      </section>
      {electionModalShowing && <AddElectionModal />}
      {updateElectionModalShowing && <UpdateElectionModal />}
    </>
  );
};

export default Elections;