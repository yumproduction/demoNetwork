import { AuthAPI, Security } from "./api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'webmax-network/auth/SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'webmax-network/auth/TOGGLE_IS_FETCHING';
const SET_CAPTCHA = 'webmax-network/auth/SET_CAPTCHA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null //if null captcha is not requiered
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
        case SET_CAPTCHA:
            return {
                ...state, captchaUrl: action.url
            }
        default:
            return state;
    }
}

export const setUserData = (id, email, login, isAuth) =>
    ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });//AC -> Action Creator

export const setCaptchaUrl = (url) =>
    ({ type: SET_CAPTCHA, url });//AC -> Action Creator


export const authUser = () => async (dispatch) => {
    let response = await AuthAPI.authMe();

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true))

    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await AuthAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(authUser());
    }        
    else{
        if(response.data.resultCode === 10){
            dispatch(getCaptchaUrl());
        }
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

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await Security.getCaptcha();
    const url = response.data.url;
    dispatch(setCaptchaUrl(url));
}


export default authReducer;