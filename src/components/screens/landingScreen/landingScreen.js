import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';
import Navbar from '../../subComponents/Navbar/Navbar';

const  Landing = () => {
  
	useEffect(() => {
    if (localStorage.getItem("authToken")) {
        localStorage.removeItem("current_user");
        localStorage.removeItem("authToken");
    }
},[])
    return (

      <>
      
    <Navbar/>

      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Welcome to ACOBA</h1>
            <div className="buttons">
              <Link to='/registerscreen' className="btn btn-primary signup_btn">Sign Up</Link>
              <Link to='/login' className="btn btn-light signin_btn">Login</Link>
            </div>
          </div>
        </div>
      </section>
      
      
      </>
    )
}
export default Landing
