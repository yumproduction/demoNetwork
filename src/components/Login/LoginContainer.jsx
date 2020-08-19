import React from 'react';
import LoginReduxForm from './Login';
import { connect } from 'react-redux';
import { login } from '../../Redux/auth-reducer';
import { Redirect } from 'react-router-dom';


class LoginContainer extends React.Component {

    onSubmitForm = (formData) => {
        this.props.login(formData.email, formData.password, formData.rememberData, formData.captcha)
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to={'/profile'} />
        }
        return <LoginReduxForm onSubmit={this.onSubmitForm} captchaUrl={this.props.captchaUrl}/>
    }
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(LoginContainer);