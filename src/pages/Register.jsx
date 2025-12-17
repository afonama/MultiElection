import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  const [userData, setUserData] = useState({fullName: "", email: "", password: "", password2: ""})
  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value }
    })
  }
  console.log(userData)
  return (
    <section className="register">
      <div className="container register__container">
        <h2>Sign Up</h2>
        <form>
          <p className="form__error-message">Any error from the backend</p>
          <input type="text" name="fullName" placeholder='Full Name' autoComplete='true' autoFocus required onChange={changeInputHandler}/>
          <input type="email" name="email" placeholder='Email Address' autoComplete='true' required onChange={changeInputHandler}/>
          <input type="password" name="password" placeholder='Password' autoComplete='true' required onChange={changeInputHandler}/>
          <input type="password" name="password2" placeholder='Confirm Password' autoComplete='true' required onChange={changeInputHandler}/>
          <p>Already have an account: <Link to= '/'> Sign In </Link> </p>
          <button type='submit' className="btn primary">Register</button>
        </form>
      </div>
    </section>
  )
}

export default Register
