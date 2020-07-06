import { ProfileAPI } from "./api/api";

const SET_USER_PROFILE = 'webmax-network/profile/SET_USER_PROFILE';
const ADD_POST = 'webmax-network/profile/ADD_POST';
const SET_STATUS = 'webmax-network/profile/SET_STATUS';
const DELETE_POST = 'webmax-network/profile/DELETE_POST';


let initialState = {
    post: [
        { item: 1, text: 'Hi', likes: 15 },
        { item: 2, text: 'How are you?', likes: 20 },
        { item: 3, text: 'Well Im doin just fine', likes: 14 },
        { item: 4, text: 'I lied Im dying inside', likes: 5 }
    ],
    profile: null,
    status: ''
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, //поверхерсная копия
                post: [...state.post, {
                    item: 5,
                    text: action.newPostText,
                    likes: 45
                }],//глубокая копия
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                post: state.post.filter(p => p.id !== action.postID)
            }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = (data) =>
    ({ type: SET_USER_PROFILE, profile: data });

export const setStatus = (status) =>
    ({ type: SET_STATUS, status });

export const deletePost = (postID) =>
    ({ type: DELETE_POST, postID });

export const setProfile = (userId) => async (dispatch) => {
    dispatch(setUserProfile(await ProfileAPI.setUserProfile(userId)));
}

export const getStatus = (userId) => async (dispatch) => {
    let data = await ProfileAPI.getProfileStatus(userId);
    dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = ProfileAPI.updateProfileStatus(status)

    if (response.resultCode === 0)
        dispatch(setStatus(status));
}

export default profileReducer;