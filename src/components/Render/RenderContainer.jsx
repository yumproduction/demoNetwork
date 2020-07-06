import React from 'react'
import { connect } from 'react-redux'
import Render from './Render'
import { withRouter, Redirect, Route } from 'react-router-dom'
import LoginContainer from '../Login/LoginContainer'
import { initializeApp } from '../../Redux/appReducer'
import Preloader from '../Common/Preloader/Preloader'
import classes from './Render.module.css'


class RenderContainer extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) return <div className={classes.preloader}><Preloader /></div>
        if (!this.props.isAuth) {
            return <div>
                <Redirect to='/login' />
                <Route path='/login' render={() => <LoginContainer />} />
            </div>
        }
        return <Render {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        props: state.props,
        initialized: state.app.initialized,
        nightMode: state.app.nightMode
    }
}
export default withRouter(connect(mapStateToProps,
    { initializeApp })(RenderContainer));