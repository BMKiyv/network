import React from "react";
import { NavLink } from "react-router-dom";
import './style.scss'

const SideBar = () => {

    return (
        <div className='profile'>
        <NavLink to='/main' className = {isActive =>isActive? 'activeLink': 'anchor'} >Main page</NavLink>
        <NavLink  to='/bio' className = {isActive =>isActive? 'activeLink': 'anchor'}>Profile</NavLink>
        <NavLink to='/dialogs' className ={isActive =>isActive? 'activeLink': 'anchor'}>Messages</NavLink>
        <a href='/' className = 'anchor'>Music</a>
        <a href='/' className = 'anchor'>Settings</a>
      </div>
    )
}
export default SideBar;