import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    
    let path = '/dialogs/' + props.item;

    return (
        <div className={classes.dialog}>
            <NavLink to={path} className = {classes.dialogs + 
                props.nightMode === false ? classes.ev : classes.night}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;