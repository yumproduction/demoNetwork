import React, { Suspense } from 'react'
import Nav from './../Navbar/Nav';
import { Route } from 'react-router-dom';
import News from './../News/News';
import Settings from './../Settings/Settings';
import Music from './../Music/Music';
//import DialogsContainer from './../Dialogs/DialogContainer';
import UsersContainer from './../Users/UsersContainer';
import ProfileContainer from './../Profile/ProfileContainer';
import HeaderContainer from './../Header/HeaderContainer';
// import LoginContainer from './../Login/LoginContainer';
import NavContainer from '../Navbar/NavContainer';
import Preloader from '../Common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => { return import('./../Dialogs/DialogContainer') });
const LoginContainer = React.lazy(() => { return import('./../Login/LoginContainer') });

let Render = (props) => {
    return <div>
        <canvas className={'body' + ' ' + (props.nightMode === true ? 'night' : '')}></canvas>
        <div className={'wrapper' + ' ' + (props.nightMode === true ? 'nightMode' : '')}>
            <HeaderContainer />
            <NavContainer />
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route exact path='/dialogs' render={() => {
                    return <Suspense fallback={<Preloader />}><DialogsContainer /></Suspense>
                }} />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/settings' render={() => <Settings />} />
                <Route path='/login' render={() => {
                return <Suspense fallback={<Preloader />}><LoginContainer /></Suspense> }} />
            </div>
        </div>
    </div>
}

export default Render;