import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const LoginModal = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalOpen, setModalOpen] = useState(true); 

  useEffect(() => {
    const isUserLogedin = localStorage.getItem('isUserLogedin');
    if (isUserLogedin==='true') {
      setModalOpen(false);
    }
  }, []);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };

  const handleBackClick = () => {
    setShowLoginForm(false);
    setShowSignUpForm(false);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const Username = localStorage.getItem('username');
    const Password = localStorage.getItem('password');
    if(Username === username && Password === password){
      setModalOpen(false);
      localStorage.setItem('isUserLogedin', true);
    }
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('isUserLogedin', true);
    setShowSignUpForm(false);
    setModalOpen(false);
  };

  return (
    <Modal style={{ backdropFilter: 'blur(10px)' }} open={modalOpen} disableBackdropClick={true} disableEscapeKeyDown={true}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          textAlign: 'center', // Align text center
        }}
      >
        {showLoginForm ? (
          <form onSubmit={handleSubmit} sx={{ '& > div': { marginBottom: '16px' } }}>
            <h2 id="modal-title" sx={{ marginBottom: '16px' }}>Login</h2>
            <div>
              <label htmlFor="username" sx={{ display: 'block', marginBottom: '8px' }}>Username:</label>
              <input type="text" id="username" value={username} onChange={handleUsernameChange} sx={{ width: '100%', padding: '8px', fontSize: '14px' }} />
            </div>
            <div>
              <label htmlFor="password" sx={{ display: 'block', marginBottom: '8px' }}>Password:</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} sx={{ width: '100%', padding: '8px', fontSize: '14px' }} />
            </div>
            <Button type="submit" sx={{ marginTop: '16px' }}>Login</Button>
            <Button onClick={handleBackClick} sx={{ marginTop: '16px', marginLeft: '8px' }}>Back</Button>
          </form>
        ) : showSignUpForm ? (
          <form onSubmit={handleSignUpSubmit} sx={{ '& > div': { marginBottom: '16px' } }}>
            <h2 id="modal-title" sx={{ marginBottom: '16px' }}>Sign Up</h2>
            <div>
              <label htmlFor="username" sx={{ display: 'block', marginBottom: '8px' }}>Username:</label>
              <input type="text" id="username" value={username} onChange={handleUsernameChange} sx={{ width: '100%', padding: '8px', fontSize: '14px' }} />
            </div>
            <div>
              <label htmlFor="password" sx={{ display: 'block', marginBottom: '8px' }}>Password:</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} sx={{ width: '100%', padding: '8px', fontSize: '14px' }} />
            </div>
            <Button type="submit" sx={{ marginTop: '16px' }}>Sign Up</Button>
            <Button onClick={handleBackClick} sx={{ marginTop: '16px', marginLeft: '8px' }}>Back</Button>
          </form>
        ) : (
          <>
            <h2 id="modal-title">Please log in</h2>
            <p id="modal-description">You need to log in to access this website.</p>
            <Button onClick={handleLoginClick}>Log In</Button>
            <Button onClick={handleSignUpClick} sx={{ marginLeft: '8px' }}>Sign Up</Button>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default LoginModal;
