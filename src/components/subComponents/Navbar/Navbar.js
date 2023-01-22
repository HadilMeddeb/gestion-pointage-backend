import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return (

    <div className="nav_header row">
      <div className="left_area col-md-10 ">
        <Link to="/"><h3><i style={{ marginRight: "20px" }} className="fas fa-code"></i>Acoba</h3></Link>
      </div>

      <div className=" row col-md-2" style={{ justifyContent: "flex-end"}} >
        <Link to='/login' className="login_btn" style={{ marginRight: "10px" }}>LogIn</Link>
        <Link to='/registerscreen' className="login_btn" style={{ marginRight: "10px" }}>SignUp</Link>
      </div>
    </div>
  );
}