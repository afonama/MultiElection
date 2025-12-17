import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
export const ErrorPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate()
    }, 6000)
  })
  return (
    <section className="errorPage">
      <div className="errorPage__container">
        {/* <img src={image} alt="Page Not Found" /> */}
        <h6>404 Page Not Found</h6>
        <p> You'll be redirected to the home page</p>
      </div>
    </section>
  )
}

export default ErrorPage
