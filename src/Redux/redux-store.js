import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import dialogsReducer from './DialogsReducer';
import profileReducer from './ProfileReducer';
import sidebarReducer from './SidebarReducer';
import usersReducer from './UsersReducer';
import authReducer from './auth-reducer';
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer';

let reducers = combineReducers({
    messagePage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
}
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.__store__ = store;

export default store;