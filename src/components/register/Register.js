import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import './register.css'; // Make sure to create and link your CSS file
import { useNavigate} from 'react-router-dom';
import axios from 'axios'
function Register() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length >= 8 || confirmPassword === newPassword) {
      setError('');
    } else {
      setError('Password must be at least 8 characters long and match the confirm password');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmNewPassword = e.target.value;
    setConfirmPassword(confirmNewPassword);
    if (confirmNewPassword === password || password.length >= 8) {
      setError('');
    } else {
      setError('Password must be at least 8 characters long and match the confirm password');
    }
  };

  const handleRegister = () => {
    // Your registration logic goes here
console.log(`Email: ${email}, Phone Number: ${phoneNumber}, Username: ${username}, Password: ${password}`);
const data={
  "email":email,
  "phoneNumber":phoneNumber,
  "username":username,
  "password":password,
  "social":0,
  "interaction":0,
  "behaviour":0,  
  "emotion":0,
  "knowledge":0,
  "civil":0,
  "responsibility":0
}

axios.post("http://localhost:4000/AdminHome-api/register-user",data)
.then((response)=>{
  if(response.status===201)
  {
      navigate('/login')
  }
  if(response.status!=201)
  {

  }
})
  };

  return (
    <div className="register-body">
      <div className="register-container">
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Phone Number"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
        />
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
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          error={error.length > 0}
          helperText={error}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={()=>{
          handleRegister();
          navigate('/login')
        }} fullWidth>
          Register
        </Button>
      </div>
    </div>
  );
}

export default Register;
