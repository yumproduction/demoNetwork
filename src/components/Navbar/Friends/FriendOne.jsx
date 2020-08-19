import React from 'react';
import classes from './Friends.module.css';

const FriendOne = (props) =>{
    return <div className = {classes.friend}>
        <div className = {classes.circle}></div>
        <div>{props.name}</div>
    </div>
}

export default FriendOne;