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
    <section
      style={{
        minHeight: '100vh',
        background: 'var(--bg, #f7fbff)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily:
          "'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        padding: '16px',
      }}
    >
      <div
        style={{
          background: 'var(--card, #fff)',
          borderRadius: 20,
          padding: '48px 32px',
          maxWidth: 480,
          width: '100%',
          boxShadow: '0 16px 40px rgba(15,23,42,0.1)',
          textAlign: 'center',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
      >
        {/* Icon */}
        <div
          style={{
            fontSize: 48,
            color: '#2563eb',
            marginBottom: 24,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <IoExitOutline />
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: 'var(--title, #0f172a)',
            marginBottom: 12,
          }}
        >
          Confirm Logout
        </h2>

        {/* Description */}
        <p
          style={{
            color: '#6b7280',
            fontSize: 16,
            lineHeight: 1.6,
            marginBottom: 36,
          }}
        >
          Are you sure you want to log out? You will be redirected to the login page.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          {/* Logout button */}
          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)',
              color: '#fff',
              border: 'none',
              padding: '12px 28px',
              borderRadius: 12,
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
              boxShadow: '0 6px 18px rgba(37,99,235,0.15)',
              transition: 'all 0.2s ease',
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <IoExitOutline size={20} />
            Logout
          </button>

          {/* Cancel button */}
          <button
            onClick={handleCancel}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'transparent',
              color: '#2563eb',
              border: '2px solid #2563eb',
              padding: '12px 28px',
              borderRadius: 12,
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <IoCloseOutline size={20} />
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default Logout;
