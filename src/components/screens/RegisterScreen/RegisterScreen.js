import axios from 'axios'
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../subComponents/Navbar/Navbar';
import './RegisterScreen.css'

const Register = ({ history }) => {



  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");


  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: { "Content-Type": "application/json" }
    }

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => { setError("") }, 5000)
      return setError("passsword do not match");
    }
    try {
      const { data } = await axios.post("/api/admin/auth/register", { username, email, password}, config)
      console.log("data",data)
      history.push("/login")
    }
    catch (error) {
      setError(error.response.data.error)
      setTimeout(() =>{ setError(""); }, 5000)
    }
  }


  const getUser=()=>
  {
    console.log("current user :",localStorage.getItem("current_user"));
  }
  return (
    <>

      <Navbar />

      <div style={{ padding: "100px" }}>
        <h1 className='large signuptitle' >Sign Up</h1>
       
        {error && <span className="error_message ">{error} </span>}
        <p className='lead'>
          <i className='fas fa-user'></i> Create Your Account
        </p>

        <form className='form' onSubmit={registerHandler }>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}

            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
            <small className='form-text'>
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              required
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='ConfirmPassword'
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}

            />
          </div>
          <input type='submit' className='btn btn-primary' value='Register' />
        </form>
        {console.log("current user :",localStorage.getItem("current_user"))}

        <p className='my-1'>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </div>

    </>
  );
};



export default Register;
