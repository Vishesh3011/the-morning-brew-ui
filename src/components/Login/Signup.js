import React, { useState } from 'react';

import './Signup.css';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Feature/userSlice';
import Swal from 'sweetalert2';

import "../../Feature/userSlice.css";

function SignUp() {
    const navigate = useNavigate();

    const [ email, setEmail ] = useState("")
    const [ username, setUserName ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confPassword, setConfirmPassword ] = useState("")

    const dispatch = useDispatch()

    const handleRegister = (e) => {
        e.preventDefault();
        if(password !== confPassword){
            Swal.fire({
                icon: 'error',
                title: 'Sign-up failed.',
                text: 'Password and Confirm password do not match!'
              });
              
            return
        }else{
            // console.log(email, username, password, confPassword)
            dispatch(registerUser({email, username, password}))
            Swal.fire("Welcome to The Morning Brew!", "Sign-up successful. You may now login.", "success");
            navigate("/login")
        }
    }

  return (
    <section id='signup' className='signup'>
        <div className='signupCard'>
            <h2 className='signupCardTitle'>Sign Up</h2>
            {/* {error && <p className='error'>{error}</p>} */}
            <form className='signupCardForm' onSubmit={handleRegister}>
                <div className='signupCardFormElement'>
                    <h3>Email</h3>
                    <input onChange={(e) => setEmail(e.target.value)}type='email' className='formInp'/>
                </div>
                <div className='signupCardFormElement'>
                    <h3>Username</h3>
                    <input onChange={(e) => setUserName(e.target.value)} type='text' className='formInp'/>
                </div>
                <div className='signupCardFormElement'>
                    <h3>Password</h3>
                    <input onChange={(e) => setPassword(e.target.value)}type='password' className='formInp'/>
                </div>
                <div className='signupCardFormElement'>
                    <h3>Confirm Password</h3>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type='password' className='formInp'/>
                </div>
                <button type='submit' className='formSubmitBtn btn btn-primary'>Sign Up</button>
            </form>
        </div>
        <div className='signupLogin'>
            Already have an account?
            <Link to="/login" className='signupText'>Login</Link>
        </div>
    </section>
  )
}

export default SignUp