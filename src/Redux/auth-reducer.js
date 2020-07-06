import { AuthAPI } from "./api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setUserData = (id, email, login, isAuth) =>
    ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });//AC -> Action Creator

export const authUser = () => async (dispatch) => {
    let response = await AuthAPI.authMe();

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true))

    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await AuthAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(authUser());
    }
    else {
        let message = response.data.messages.length > 0 ?
            response.data.messages[0] : 'Wrong password or email';
        dispatch(stopSubmit('login',
            { _error: message }));
    }
}

export const logout = () => async (dispatch) => {
    let response = await AuthAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}


export default authReducer;