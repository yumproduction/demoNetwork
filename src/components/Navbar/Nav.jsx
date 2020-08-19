import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import moon from './../../assets/images/moon.png'
import sun from './../../assets/images/sun.png'
// import Friends from './Friends/Friends';

const Navbar = (props) =>{
    return <nav className={classes.navbar}>
    <div className = {classes.item}>
      <NavLink to = '/profile' activeClassName = {classes.active}>Profile</NavLink>
    </div>
    <div className = {classes.item}>
      <NavLink to = '/dialogs' activeClassName = {classes.active}>Messages</NavLink>
    </div>
    <div className = {classes.item}>
      <NavLink to = '/news' activeClassName = {classes.active}>News</NavLink>
    </div>
    <div className = {classes.item}>
      <NavLink to = '/music' activeClassName = {classes.active}>Music</NavLink>
    </div>
    <br/>
    <div className = {classes.item}>
      <NavLink to = '/users' activeClassName = {classes.active}>Users</NavLink>
    </div>
    <br/>
    <div className = {classes.item}>
      <NavLink to = '/settings' activeClassName = {classes.active}>Settings</NavLink>
    </div>
    <br/>
    <div className = {classes.img}>
      <img src={props.nightMode ?  moon : sun} alt="" srcset="" onClick = {props.setMode}/>
    </div>
  </nav>
}

export default Navbar;