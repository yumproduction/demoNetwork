import { authUser } from "./auth-reducer";

const SET_INITIALIZE = 'SET_INITIALIZE';
const SET_MODE = 'SET_MODE';

let initialState = {
    initialized: false,
    nightMode: false
};


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE:
            return {
                ...state,
                initialized: true
            }
        case SET_MODE:
            return {
                ...state,
                nightMode: !state.nightMode
            }
        default:
            return state;
    }
}

export const setInitializedSuccess = () =>
    ({ type: SET_INITIALIZE });//AC -> Action Creator

export const setMode = () =>
    ({ type: SET_MODE });

export const initializeApp = () => (dispatch) => {
    dispatch(authUser())
        .then(() => {
            dispatch(setInitializedSuccess());
        })
}


export default appReducer;