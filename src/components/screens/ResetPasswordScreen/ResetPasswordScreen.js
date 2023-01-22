import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../../subComponents/Navbar/Navbar'

export default function ResetPassword({match})
{
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
	const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  

	const  resetPasswordHandler= async(e)=>
	{ 
		e.preventDefault();

		const config={headers:{"content-Type":"application/json"}}

		try
		{
			if(password !==confirmPassword)
			{
				setPassword("");
				setConfirmPassword("");
				setTimeout(()=>{setError("")},5000);
				return setError("Passwords don't match ")
			}
            
			const {data}= axios.post(`/api/auth/resetPassword/${match.params.resetToken}`,{password},config);
			console.log(data)
			setSuccess(data.data)
			Swal.fire('password has been reset successfully')
		}
		catch(error)
		{
	
		}
	}



return (<body>
	<Navbar/>
	<div class="login-wrap d-flex align-items-center flex-wrap justify-content-center">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-6">
					<img src="vendors/images/forgot-password.png" alt=""/>
				</div>
				<div class="col-md-6">
					<div class="login-box bg-white box-shadow border-radius-10">
						<div class="login-title">
							<h2 class="text-center text-primary">Reset Password</h2>
						</div>
						{error && <span className= "error_message">{error}</span>}
                        {success && <span className= "success_message">{error}</span>}  
						{ success&& <Link to="/login"> Login </Link>}
						<h6 class="mb-20">Enter your new password, confirm and submit</h6>
						<form onSubmit={resetPasswordHandler}>
							<div class="input-group custom">
								<input type="text" class="form-control form-control-lg" placeholder="New Password" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
								<div class="input-group-append custom">
									<span class="input-group-text"><i class="dw dw-padlock1"></i></span>
								</div>
							</div>
							<div class="input-group custom">
								<input type="text" class="form-control form-control-lg" placeholder="Confirm New Password" required value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
								<div class="input-group-append custom">
									<span class="input-group-text"><i class="dw dw-padlock1"></i></span>
								</div>
							</div>

							<div class="row align-items-center">
								<div class="col-5">
									<div class="input-group mb-0">
											<input class="btn btn-primary btn-lg btn-block" type="submit" value="Submit"/>
									</div>
								</div>
							</div>
						
                        </form>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</body>)


}