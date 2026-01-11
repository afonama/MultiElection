import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux';
import { uiActions } from '../redux/ui-slice';
import { useOutletContext } from 'react-router-dom';

const AddCandidateModal = ({ electionId }) => {
    const [fullName, setFullName] = useState("");
    const [motto, setMotto] = useState("");
    const [party, setParty] = useState(""); // Needed to match your Data.js structure
    const [image, setImage] = useState(null);

    // Get the elections state from RootLayout
    const { setElections } = useOutletContext();
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(uiActions.closeAddCandidateModal());
    };

    // --- THE FIX: HANDLE SUBMIT FUNCTION ---
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload

        if (!fullName || !motto || !party) {
            alert("Please fill all fields");
            return;
        }

        const newCandidate = {
            id: `c${Date.now()}`, // Unique ID
            name: fullName,
            party: party,
            motto: motto,
            votes: 0,
            // For local development, we use a preview URL
            image: image ? URL.createObjectURL(image) : "" 
        };

        // Update the global elections state
        setElections(prevElections => {
            return prevElections.map(election => {
                // Find the specific election (e.g., Presidential 2023)
                if (election.id === electionId) {
                    return {
                        ...election,
                        candidates: [...election.candidates, newCandidate]
                    };
                }
                return election;
            });
        });

        // Close modal after success
        closeModal();
    };

    return (
        <section className="modal">
            <div className="modal__content">
                <header className="modal__header">
                    <h4>Add candidate</h4>
                    <button className="modal__close" onClick={closeModal}><IoMdClose/></button>
                </header>
                
                {/* Ensure onSubmit is attached to the form */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <h6>Candidate Name</h6>
                        <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} required />
                    </div>
                    <div>
                        <h6>Candidate Party</h6>
                        <input type="text" value={party} onChange={e => setParty(e.target.value)} required />
                    </div>
                    <div>
                        <h6>Candidate Motto</h6>
                        <input type="text" value={motto} onChange={e => setMotto(e.target.value)} required />
                    </div>
                    <div>
                        <h6>Candidate Image</h6>
                        <input type="file" onChange={e => setImage(e.target.files[0])} accept='image/*' required />
                    </div>
                    <button type="submit" className="btn primary">Add Candidate</button>
                </form>
            </div>
        </section>
    )
}

export default AddCandidateModal