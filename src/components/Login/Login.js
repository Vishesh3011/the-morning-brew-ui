import React, { useRef, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Alert } from '@mui/material';

import { useAuth } from './AuthContext';
import './Login.css';
import { loginUser } from '../../Feature/userSlice';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import swal from 'sweetalert';



function Login() {
    // const emailRef = useRef();
    // const passRef = useRef();
    // const { login } = useAuth();
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();

    // async function handleSubmit(e){
    //     e.preventDefault();

    //     try {
    //         setError('');
    //         setLoading(true);
    //         await login(emailRef.current.value, passRef.current.value);   
    //         navigate('/');
    //     }catch{
    //         setError('Failed to login. Please try again.');
    //     }
    //     setLoading(false);
    // }

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogin = (e) => {
    e.preventDefault();
        console.log(email, password);
        dispatch(loginUser({email, password}));
        swal("Welcome back!", "Login successful.", "success");
        navigate("/")
    }

  return (
    <section id="login" className='login'>
        <div className='signupCard'>
            <h2 className='signupCardTitle'>Login</h2>
            {/* {error && <p className='error'>{error}</p>} */}
            <form className='signupCardForm' onSubmit = {handleLogin}>
                <div className='signupCardFormElement'>
                    <h3>Email</h3>
                    <input type='email' className='formInp' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='signupCardFormElement'>
                    <h3>Password</h3>
                    <input type='password' className='formInp' onChange={(e) => setPassword(e.target.value)}s/>
                </div>
                <button type='submit' className='formSubmitBtn btn btn-primary'>Login</button>
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