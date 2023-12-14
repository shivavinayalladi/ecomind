import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Navbar from  '../navbar/Navbar'
import Box from '@mui/material/Box';

function Analytics() {
  return (
    <div>
    <Navbar/>
    <Box height={45}/>
    <Box sx={{ display: 'flex' }}>
    <Dashboard/>
    <Box component="main" sx={{ flexGrow: 1,p:4}}>
        <div>
            <h1>Analytics !!</h1>
        </div>
    </Box>
    </Box>


    </div>
  )
}

export default Analytics