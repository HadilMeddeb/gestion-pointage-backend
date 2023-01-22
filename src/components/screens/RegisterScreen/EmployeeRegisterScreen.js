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
    const [num, setNum] = useState("");
    const [departement, setDepartement] = useState("");
    const [role, setRole] = useState("Employee");
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
            const { data } = await axios.post("/api/auth/register", { username, email, password,departement,num,role }, config)
            localStorage.setItem("authToken", data.token)
            history.push("/")
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

            <div style={{ padding: "100px" }}>
                <h1 className='large signuptitle' >Sign Up</h1>
                {error && <span className="error_message ">{error} </span>}
                <p className='lead'>
                    <i className='fas fa-user'></i> Create Your Account
                </p>

                <form className='form' onSubmit={registerHandler}>
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

                    </div>
                   
                        <div className='form-group'>
                            <input style={{width:"100%",padding:"0.4rem",border:" 1px solid #ccc",fontSize: "1.2rem"}}
                                type='Number' 
                                placeholder='Employee Number'
                                name='num'
                                required
                                value={num}
                                onChange={(e) => setNum(e.target.value)}

                            />
                        </div>
                        <div className='form-group'>
                            <select class="form-select " style={{padding:"0.4rem",border:" 1px solid #ccc",fontSize: "1.2rem"}} required value={departement} aria-label="Default select example" onChange={(e) => setDepartement(e.target.value)}>
                                <option selected> select departement</option>
                                <option value="Acoba">Acoba</option>
                                <option value="Stagiaire">Stagiaire</option>
                            </select>

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

                <p className='my-1'>
                    Already have an account? <Link to='/login'>Sign In</Link>
                </p>
            </div>

        </>
    );
};



export default Register;
