import React from 'react';
import Header from './Header';
import { setUserData, logout } from '../../Redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) =>({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {setUserData, logout})(HeaderContainer);