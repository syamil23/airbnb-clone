import React from 'react'
import Home from './Home'
import Location from './Location'
import Profile from './Profile'
import Box from '@mui/material/Box';
import './Header.css'

const Header = () => {
  return (
    <Box className='Header'>
    <Home /> 
    <Location />
    <Profile />
    </Box>
  )
}

export default Header;