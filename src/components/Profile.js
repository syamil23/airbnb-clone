import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import './Profile.css'
import { Dropdown } from 'bootstrap';
import DropdownItem from './DropdownItem';
import './dropdownItem.css';
import {useState, useEffect} from 'react';


const Profile = () => {

  const [open, setOpen ]= useState (false);

  useEffect (() => {
    let handler = () => {
      setOpen(false);
    };

    document.addEventListener("mousedown", handler);
  });

  return (
    <ul>
    <div className="header-right">
    <div className='hosting'>
    <li> <button className='abnbyh'>Airbnb your home</button></li>
    </div>
    <div className='lang'>
    <li> <button className='language'><LanguageIcon /></button></li>
    </div>
    <div className='menu-container'>
     <div className='menu-trigger' onClick={()=>{setOpen(!open)}} >
    <MenuIcon /><AccountCircleIcon size={50} style={{ fill: '#606060' }}   />
      <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
        <ul>
          <DropdownItem className='sign-up' text={"Sign up"}/>
          <DropdownItem text={"Log in"}/>
          <hr className='lines'/>
          <DropdownItem text={"Airbnb your home"}/>
          <DropdownItem text={"Host an experience"}/>
          <DropdownItem text={"Help"}/> 
    </ul>
    </div>
    </div>
    </div>  
    </div>
    </ul>
   
  )
}




export default Profile;
