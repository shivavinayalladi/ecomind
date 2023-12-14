import React from 'react'
import { Outlet } from 'react-router-dom';

function Rootlayout() {
    return (
      <div>
        {/* <Navbar /> */}
        <Outlet /> 

      </div>
    );
  }
  
  export default Rootlayout;