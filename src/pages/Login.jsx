import React, { useState } from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router-dom' // Added useOutletContext
import { voters } from '../Data'

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const navigate = useNavigate();
  
  // 1. Hook into the setter function from RootLayout
  const { setIsAuthenticated } = useOutletContext();

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
    if (error) setError("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); 
    const { email, password } = userData;

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const user = voters.find(v => v.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      setError("No account found with this email.");
    } else if (user.password !== password) {
      setError("Invalid password. Please try again.");
    } else {
      // --- THE FIX IS HERE ---
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('isAuthenticated', 'true'); // Set the flag
      
      setIsAuthenticated(true); // 2. THIS triggers the NavBar to change immediately!
      
      navigate('/elections');
    }
  }

  return (
    <section className="register">
      <div className="container register__container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="form__error-message">{error}</p>}
          <input type="email" name="email" placeholder='Email Address' required value={userData.email} onChange={changeInputHandler} autoFocus />
          <input type="password" name="password" placeholder='Password' required value={userData.password} onChange={changeInputHandler}/>
          <p>Don't have an account? <Link to='/register'> Sign Up </Link> </p>
          <button type='submit' className="btn primary">Login</button>
        </form>
      </div>
    </section>
  )
}

export default Login
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { voters } from '../Data' // Import voters to validate credentials
// const Login = () => {
//   const [userData, setUserData] = useState({ email: "", password: "" })
//   const [error, setError] = useState("") // State to hold error messages
//   const navigate = useNavigate();
//   const changeInputHandler = (e) => {
//     setUserData(prevState => {
//       return { ...prevState, [e.target.name]: e.target.value }
//     })
//     if (error) setError("");
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError(""); 
//     const { email, password } = userData;
//     if (!email || !password) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     const user = voters.find(v => v.email.toLowerCase() === email.toLowerCase());
//     if (!user) {
//       setError("No account found with this email.");
//     } else if (user.password !== password) {
//       setError("Invalid password. Please try again.");
//     } else {
//       localStorage.setItem('currentUser', JSON.stringify(user));
//       navigate('/elections');
//     }
//   }
//   return (
//     <section className="register">
//       <div className="container register__container">
//         <h2>Sign In</h2>
//         <form onSubmit={handleSubmit}>
//           {error && <p className="form__error-message">{error}</p>}
//           <input type="email" name="email" placeholder='Email Address' autoComplete='on' required value={userData.email} onChange={changeInputHandler} autoFocus
//           />
//           <input type="password" name="password" placeholder='Password' autoComplete='on' required value={userData.password} onChange={changeInputHandler}/>
//           <p>Don't have an account? <Link to='/register'> Sign Up </Link> </p>
//           <button type='submit' className="btn primary">Login</button>
//         </form>
//       </div>
//     </section>
//   )
// }
// export default Login