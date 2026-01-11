import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { uiActions } from '../redux/ui-slice';
import { useOutletContext } from 'react-router-dom'; // 1. Import context hook

const AddElectionModal = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState("");
  
    const dispatch = useDispatch();
    const { setElections } = useOutletContext(); // 2. Access the setter

    const closeModal = () => {
        dispatch(uiActions.closeElectionModal());
    };

    // 3. Logic to handle the submission
        const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Convert title to UPPERCASE to match the UI of others
    const formattedTitle = title.toUpperCase();

    const newElection = {
        id: `election-${Date.now()}`, 
        title: formattedTitle, // Matches "2023 PRESIDENTIAL ELECTION"
        description: description,
        status: "ongoing",
        candidates: [], 
        totalVotes: 0,
        // 2. We store the object URL, but we must ensure the Election card displays it
        thumbnail: thumbnail ? URL.createObjectURL(thumbnail) : "" 
    };

    setElections(prevElections => [newElection, ...prevElections]);
    closeModal();

    };

    return(
        <section className="modal">
            <div className="modal__content">
                <header className="modal__header">
                    <h4>Create New Election</h4>
                    <button className="modal__close" onClick={closeModal}><IoMdClose/></button>
                </header>
                {/* 4. Added onSubmit handler */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <h6>Election Title</h6>
                        <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    
                    <div>
                        <h6>Election Description</h6>
                        {/* 5. Fixed value binding (was title, changed to description) */}
                        <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>
                    
                    <div>
                        <h6>Election Thumbnail</h6>
                        <input type="file" name="thumbnail" onChange={e => setThumbnail(e.target.files[0])} accept="png, jpg, jpeg, webp, avif"/>
                    </div>
                    <button type="submit" className="btn primary" >Add Election</button>
                </form>
            </div>
        </section>
    );
};

export default AddElectionModal;