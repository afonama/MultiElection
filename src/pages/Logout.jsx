import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoExitOutline, IoCloseOutline } from 'react-icons/io5';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log('User logged out');
    navigate("/");
  };
  const handleCancel = () => navigate(-1);
  return (
    <section className="logout-page">
      <div className="logout-card">
        <div className="logout-icon">
          <IoExitOutline />
        </div>
        <h2 className="logout-title">Confirm Logout</h2>
        <p className="logout-text">
          Are you sure you want to log out? You will be redirected to the login page.
        </p>
        <div className="logout-buttons">
          <button onClick={handleLogout} className="logout-button primary">
            <IoExitOutline size={20} />
            Logout
          </button>

          <button onClick={handleCancel} className="logout-button secondary">
            <IoCloseOutline size={20} />
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};
export default Logout;
