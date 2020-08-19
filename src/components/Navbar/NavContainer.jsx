import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import moon from './../../assets/images/moon.png'
import Navbar from './Nav';
import { setMode } from '../../Redux/appReducer';
import { connect } from 'react-redux';
// import Friends from './Friends/Friends';

class NavContainer extends React.Component{
    render(){
       return <Navbar setMode = {this.props.setMode} nightMode = {this.props.nightMode}/>
    }
}

let mapStateToProps =(state) =>({
  nightMode: state.app.nightMode
})

export default connect(mapStateToProps,
  { setMode })(NavContainer);