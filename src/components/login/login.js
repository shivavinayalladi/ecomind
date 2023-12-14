import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import './login.css'; // Make sure to create and link your CSS file
import {Link,useNavigate} from 'react-router-dom';
import Alert from '@mui/material/Alert';
import axios from 'axios'
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [f,setf]=useState(0);
  let navigate=useNavigate();
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
   
    console.log(`Username: ${username}, Password: ${password}`);
    const data={
      "username":username,
      "password":password
    }
    axios.post("http://localhost:4000/AdminHome-api/login-user",data)
    .then((response)=>{
      console.log(response.data)
      if(response.data.message==="success")
      {
        navigate("/dashboard")
      }else{
        navigate("/login")
        // window.alert(response.data.message)
        setTimeout(()=>{
          window.alert(response.data.message)
        },500);
     
     
      }
    })
  

    // You can add further login logic here
  };

  return (
    <div className='log'>
     
    <div className="login-body">
     
      <div className="login-container">
      {error.length !== 0 && (
        <Alert severity="error">{error}</Alert>
      )}
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
    <div className='picture'>
        <img src="https://static8.depositphotos.com/1378583/981/v/600/depositphotos_9819791-stock-illustration-hand-tree.jpg"/>
      </div>
    </div>
  );
}

export default Login;
