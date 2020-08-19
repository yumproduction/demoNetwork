import React from 'react';
import classes from './Dialogs.module.css'
import user from '../../../assets/images/user.png'

const Message = (props) =>{
    return(<div className = {classes.messages}>
    <img src={user} alt="" />
    <div className={classes.message}>{props.text}</div>
    </div>
    )
}

export default Message;