import React, { useRef, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Alert } from '@mui/material';

import { useAuth } from './AuthContext';
import './Login.css';



function Login() {
    const emailRef = useRef();
    const passRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passRef.current.value);   
            navigate('/');
        }catch{
            setError('Failed to login. Please try again.');
        }
        setLoading(false);
    }

  return (
    <section id="login" className='login'>
        <div className='signupCard'>
            <h2 className='signupCardTitle'>Login</h2>
            {error && <p className='error'>{error}</p>}
            <form className='signupCardForm' onSubmit={handleSubmit}>
                <div className='signupCardFormElement'>
                    <h3>Email</h3>
                    <input ref = {emailRef} type='email' className='formInp'/>
                </div>
                <div className='signupCardFormElement'>
                    <h3>Password</h3>
                    <input ref = {passRef} type='password' className='formInp'/>
                </div>
                <button disabled={loading} type='submit' className='formSubmitBtn btn btn-primary'>Login</button>
            </form>
        </div>
        <div className='signupLogin'>
            Do not have an account?
            <Link to='/signup' className='signupText'>Sign Up</Link>
        </div>
    </section>
  )
}

export default Login