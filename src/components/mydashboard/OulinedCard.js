import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import QuizIcon from '@mui/icons-material/Quiz';
import Typography from '@mui/material/Typography';
import './OulinedCard.css'
import { useNavigate } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const OutlinedCard = () => {
  const navigate = useNavigate();

  const card = (
    <React.Fragment>
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
      </CardContent>
      <CardActions>
        <Button size="small" className='small' onClick={() => navigate('/quiz')}>
          <h5>View</h5>
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ maxWidth: 255 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default OutlinedCard;
