import React, { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  // ✅ Get auth state updater from RootLayout via Outlet context
  const { setIsAuthenticated } = useOutletContext();

  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    password: '',
    password2: ''
  });

  const [error, setError] = useState('');

  const changeInputHandler = (e) => {
    setUserData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // --- Basic validation ---
    if (!userData.fullName || !userData.email || !userData.password || !userData.password2) {
      setError('All fields are required.');
      return;
    }

    if (userData.password !== userData.password2) {
      setError('Passwords do not match.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // ✅ Save user to localStorage
    const newUser = {
      fullName: userData.fullName,
      email: userData.email
    };
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    // ✅ Update auth state so Navbar updates immediately
    setIsAuthenticated(true);

    // ✅ Redirect to Elections page
    navigate('/elections');
  };

  return (
    <section className="register">
      <div className="container register__container">
        <h2>Sign Up</h2>

        {/* Error message */}
        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            autoFocus
            required
            onChange={changeInputHandler}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={changeInputHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={changeInputHandler}
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            required
            onChange={changeInputHandler}
          />

          <p>
            Already have an account? <Link to="/">Sign In</Link>
          </p>

          <button type="submit" className="btn primary">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
