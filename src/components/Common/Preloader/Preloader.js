import React from 'react'
import preloader from './../../../assets/images/preload.svg'
import classes from './Preloader.module.css'

let Preloader = (props) =>{
    return <div className = {classes.preloader}>
        <div className = {classes.loader}></div>
    </div>
}

export default Preloader;