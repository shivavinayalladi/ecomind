import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import './login.css'; // Make sure to create and link your CSS file
import {Link} from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [f,setf]=useState(0);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length >= 8) {
      setf(0);
      setError('');
    } else {
      setError('Password must be at least 8 characters long');
      setf(1);
    }
  };

  const handleLogin = () => {
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    console.log(`Username: ${username}, Password: ${password}`);
    // You can add further login logic here
  };

  return (
    <div className="login-body">
     
      <div className="login-container">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={error.length > 0}
          helperText={error}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        {f===0 &&<Link to ='/dashboard'>
        <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
          Login
        </Button>
        </Link>}
        <Typography variant="body2" className="register-link">
          New here? <a href="/register">Register</a>
        </Typography>
      </div>
    </div>
  );
}

export default Login;
