import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Navbar from  '../navbar/Navbar'
import Box from '@mui/material/Box';
import { Analytics1 } from './Analytics1';

function Analytics() {
  return (
    <div>
    <Navbar/>
    <Box height={45}/>
    <Box sx={{ display: 'flex' }}>
    <Dashboard/>
    <Box component="main" sx={{ flexGrow: 1,p:4}}>
        <div>
            <Analytics1/>
        </div>
    </Box>
    </Box>


    </div>
  )
}

export default Analytics