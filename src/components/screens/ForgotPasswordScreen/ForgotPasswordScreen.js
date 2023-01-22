
import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import "./ForgotPasswordScreen.css"
import Navbar from '../../subComponents/Navbar/Navbar';
import Swal from 'sweetalert2';

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const forgotPasswordHandler = async (e) => {
        e.preventDefault();
        const config = {
            headers: { "content-Type": "application/json", },
        }

        try {
            const { data } = await axios.put("/api/auth/forgotPassword", { email }, config);
            setSuccess(data.data);
            Swal.fire("reset email has been sended  check your account")
        }
        catch (error) {
            setError(error.response.data.error);
            setEmail("");
            setTimeout(() => { setError("") }, 5000)
        }
    }


    return (

        <>
            <Navbar />
            <div class="login-wrap d-flex align-items-center flex-wrap justify-content-center">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img src="vendors/images/forgot-password.png" alt="" />
                        </div>
                        <div class="col-md-6">
                            <div class="login-box bg-white box-shadow border-radius-10">
                                <div class="login-title">
                                    <h2 class="text-center text-primary">Forgot Password</h2>
                                </div>
                                {error && <span className="error_message">{error}</span>}
                                {success && <span className="success_message">{success}</span>}
                                <h6 class="mb-20">Enter your email address to reset your password</h6>
                                <form onSubmit={forgotPasswordHandler}>
                                    <div class="input-group custom">
                                        <input type="text" class="form-control form-control-lg" required placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                                        <div class="input-group-append custom">
                                            <span class="input-group-text"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                    <div class="row align-items-center">
                                        <div class="col-5">
                                            <div class="input-group mb-0">
                                                <input class="btn btn-primary btn-lg btn-block" type="submit" value="Submit" />
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="font-16 weight-600 text-center" data-color="#707373">OR</div>
                                        </div>
                                        <div class="col-5">
                                            <div class="input-group mb-0">
                                                <Link class="btn btn-outline-primary btn-lg btn-block" to="/login">Login</Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}