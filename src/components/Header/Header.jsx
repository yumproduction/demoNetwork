import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {

  return <header className={classes.header}>
    <img src={logo} className={classes.img} /> <h2 className={classes.head}>webMax</h2>
    <h2 className={classes.info}>{props.isAuth ?
      <div className = {classes.logged}>{props.login} <a onClick = {props.logout}className={classes.logout}>Logout</a></div> : <NavLink to={'/login'} className={classes.log}>Login</NavLink>}</h2>

  </header>
}

export default Header;