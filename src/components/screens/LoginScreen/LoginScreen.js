import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../subComponents/Navbar/Navbar';
import "./LoginScreen.css";


export default function Login({history})
{

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		if (localStorage.getItem("authToken")) {
		  history.push("/");
		}
	  }, [history]);
	

	const loginHandler = async (e) => {
		e.preventDefault();
	
		const config = {
		  header: { "Content-Type": "application/json" }
		};
	
		try {
		  const { data } = await axios.post("/api/auth/login", {email, password}, config);
		  localStorage.setItem("authToken", data.token);
		  localStorage.setItem("current_user", JSON.stringify(data.user));
		  
		  if(JSON.parse(localStorage.getItem("current_user")).__t=="Employee")
		  {
			history.push("/dashboard") 
		  }
		  else
		  {
            history.push("/dashboard/home")
		  }
		    }
		catch (error) 
		{
		  setError(error.response.data.error)
		  setTimeout(() => { setError(""); }, 5000)
		}

	  }


    return (

		<>

		<Navbar />

		<div style={{ padding: "100px"}}>
			<h1 className='large signuptitle' style={{marginTop:"5%"}} >Sign In</h1>
			{error && <span className="error_message ">{error} </span>}
			<p className='lead'>
				<i className='fas fa-user'></i> Create Your Account
			</p>

			<form className='form' onSubmit={loginHandler} >
				<div className='form-group'>
					<input
						type='email'
						placeholder='Email Address'
						name='email'
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}

					/>

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
				
				<input type='submit' className='btn btn-primary' value='Register' />
			</form>

			<p className='my-3'>
				Do not have an account? <Link to='/registerscreen'>Sign Up</Link>
			</p>
		</div>

	</>
    );
}