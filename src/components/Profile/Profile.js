import React, { useState } from 'react';

import './Profile.css';

import { useAuth } from '../Login/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

function Profile() {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        setError('');

        try {
            await logout();
            navigate('/login');
        }catch{
            setError('Failed to log out');
        }
    }

  return (
    <div className='profile'>
        <h2 className='profileHeader'>Profile</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <strong className='profileEmail'>Email: </strong>{currentUser.email}
        <button className='profileLogout' onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Profile