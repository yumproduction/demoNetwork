import React from 'react';
import classes from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { FormControl } from '../FormsControls/FormsControls';
import { requiredField } from '../../utils/validators/validators';
import styles from './../FormsControls/FormsControl.module.css'
let Login = ({handleSubmit, error}) => {
    return <div className={classes.login}>
        <h1>Login</h1>        
        <form action="" onSubmit={handleSubmit} className = {classes.form}>
            <div className={classes.input}>
                <Field type={'text'} placeholder={'Login'} validate={requiredField}
                    name={'email'} element='input' component={FormControl} />
            </div>
            <div className={classes.input}>
                <Field type={'password'} placeholder={'Password'} validate={requiredField}
                    name={'password'} element='input' component={FormControl} />
            </div>
            <div className={classes.check}>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> <p>remember me</p>
            </div>
            {error && <div className={styles.form_summary_error}>
                {error}

            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}



const LoginReduxForm = reduxForm({ form: 'login' })(Login);


export default (LoginReduxForm);