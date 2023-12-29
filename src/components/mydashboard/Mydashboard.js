import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Navbar from  '../navbar/Navbar'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Calendar, theme } from 'antd';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';

import QuizIcon from '@mui/icons-material/Quiz';
import CardContent from '@mui/material/CardContent';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import OutlinedCard from './OulinedCard';
function Mydashboard() {
  let navigate=useNavigate()
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    height:300
  };
  return (
    <div>
    <Navbar/>
    <Box height={45}/>
    <Box sx={{ display: 'flex' }}>
    <Dashboard/>
    <Box component="main" sx={{ flexGrow: 1,p:4}}>
    <Grid container spacing={2}>
          <Grid item xs={8}>
          <Stack spacing={2}>
          <Stack spacing={2} direction="row">
          <Card sx={{ maxWidth: 49+"%",height:160 }} className="gradientlight3" >
      
          <CardContent>
      <div className='quiz'>
         <div className='q1'>
        <QuizIcon/>
        </div>
        <div className='q2'>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          Quote
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        </div>
        </div>
        <CardActions>
        <Button size="small" className='small' onClick={() => navigate('/quote')}>
          <h5>View</h5>
        </Button>
      </CardActions>
        {/* <Typography variant="body2" color="text.secondary">
         Events
         
        </Typography> */}
      </CardContent>
      
    </Card>
    <Card sx={{ width: 49+"%",height:160 }} className="gradientlight2">
      
      <CardContent>
      <div className='quiz'>
         <div className='q1'>
        <QuizIcon/>
        </div>
        <div className='q2'>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          Riddle
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        </div>
        </div>
        <CardActions>
        <Button size="small" className='small' onClick={() => navigate('/riddle')}>
          <h5>View</h5>
        </Button>
      </CardActions>
        {/* <Typography variant="body2" color="text.secondary">
         Events
         
        </Typography> */}
      </CardContent>
      
      
    </Card>
    </Stack>
    <Stack spacing={3} direction="row">
    <Card sx={{width: 49+"%",height:160 }} className="gradient">
      
    <CardContent>
      <div className='quiz'>
         <div className='q1'>
        <QuizIcon/>
        </div>
        <div className='q2'>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          Hangman
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        </div>
        </div>
        <CardActions>
        <Button size="small" className='small' onClick={() => navigate('/Hangman')}>
          <h5>View</h5>
        </Button>
      </CardActions>
        {/* <Typography variant="body2" color="text.secondary">
         Events
         
        </Typography> */}
      </CardContent>
      
    </Card>
    <Card sx={{ width: 49+"%",height:160 }} className="gradientlight1">
      
    <CardContent>
      <div className='quiz'>
         <div className='q1'>
        <QuizIcon/>
        </div>
        <div className='q2'>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          Quiz of the Day
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        </div>
        </div>
        <CardActions>
        <Button size="small" className='small' onClick={() => navigate('/quiz')}>
          <h5>View</h5>
        </Button>
      </CardActions>
        {/* <Typography variant="body2" color="text.secondary">
         Events
         
        </Typography> */}
      </CardContent>
      
    </Card>
    </Stack>
    </Stack>
          </Grid>
          <Grid item xs={4}>
          <Stack spacing={2}>
          <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
      <div style={wrapperStyle}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
        
      </CardContent>
      
    </Card>
    
 
            </Stack>
          </Grid>
        </Grid>
       
        
    </Box>
    </Box>


    </div>
  )
}

export default Mydashboard