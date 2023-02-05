import React, { useRef, useState } from 'react';

import './Signup.css';

import { useAuth } from './AuthContext';

import { Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
    const emailRef = useRef();
    const passRef = useRef();
    const confirmPassRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        if(passRef.current.value !== confirmPassRef.current.value){
            return setError('Passwords do not match. Please try again.');
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passRef.current.value);   
            navigate('/');
        }catch{
            setError('Either account already exists or there was an error. Please try again.');
        }
        setLoading(false);
    }

  return (
    <section id='signup' className='signup'>
        <div className='signupCard'>
            <h2 className='signupCardTitle'>Sign Up</h2>
            {error && <p className='error'>{error}</p>}
            <form className='signupCardForm' onSubmit={handleSubmit}>
                <div className='signupCardFormElement'>
                    <h3>Email</h3>
                    <input ref = {emailRef} type='email' className='formInp'/>
                </div>
                <div className='signupCardFormElement'>
                    <h3>Username</h3>
                    <input type='text' className='formInp'/>
                </div>
                <div className='signupCardFormElement'>
                    <h3>Password</h3>
                    <input ref = {passRef} type='password' className='formInp'/>
                </div>
                <div className='signupCardFormElement'>
                    <h3>Confirm Password</h3>
                    <input ref = {confirmPassRef} type='password' className='formInp'/>
                </div>
                <button disabled={loading} type='submit' className='formSubmitBtn btn btn-primary'>Sign Up</button>
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