import React from 'react'
import classes from './FormsControl.module.css'
import { Field } from 'redux-form';

export const FormControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
        {props.element === 'textarea' ? <textarea {...input} {...props}/> : <input {...input} {...props}/>}
        {(hasError ? <span>{meta.error}</span> : null)}
    </div>
}

export const createField = ({placeholder, name, validators, type, element}) =>{
    return <Field placeholder = {placeholder} name = {name} 
    validators = {validators} component = {FormControl} type={type} element = {element}/>
}
