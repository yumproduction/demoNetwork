import React from 'react';
import './App.css';
import RenderContainer from './components/Render/RenderContainer';
import { Provider } from 'react-redux';
import store from './Redux/redux-store';
import { HashRouter } from 'react-router-dom';



//Componenta that returns hypertext JSX
const App = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <RenderContainer />
        {/* <div className={state.nightMode.nightMode === true ? 'nightMode' : ''}> */}
        {/* <div className={'wrapper'}>
          <HeaderContainer />
          <Nav state={props.state} />
          <div className='app-wrapper-content'>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route exact path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/login' render={() => <LoginContainer />} />
          </div>
        </div> */}
        {/* </div> */}
      </Provider>
    </HashRouter>
  );
}

export default App;