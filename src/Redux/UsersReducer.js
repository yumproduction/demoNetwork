import { UsersAPI } from "./api/api";

const FOLLOW = 'webmax-network/users/FOLLOW';
const UNFOLLOW = 'webmax-network/users/UNFOLLOW';
const SETUSER = 'webmax-network/users/SET-USER';
const SET_PAGE = 'webmax-network/users/SET-PAGE';
const SET_TOTAL = 'webmax-network/users/SET_TOTAL';
const TOGGLE_IS_FETCHING = 'webmax-network/users/TOGGLE_IS_FETCHING';
const FOLLOWING_PROCCESS = 'webmax-network/users/FOLLOWING_PROCCESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    selectedPage: 1,
    isFetching: false,
    followingInProgress: [],
    portionSize: 10
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })

            }
        case SETUSER:
            return {
                ...state,
                users: action.users
            }

        case SET_PAGE:
            return {
                ...state, selectedPage: action.selectedPage
            }

        case SET_TOTAL:
            return {
                ...state, totalUserCount: action.totalUserCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case FOLLOWING_PROCCESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state;
    }
}

export const followSuccess = (userID) => ({ type: FOLLOW, userID });//AC -> Action Creator
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
export const setUser = (users) => ({ type: SETUSER, users });
export const setCurrentPage = (selectedPage) => ({ type: SET_PAGE, selectedPage });
export const setTotalUsers = (totalUserCount) => ({ type: SET_TOTAL, totalUserCount });
export const setToggleFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setToggleProgress = (isFetching, userID) => ({ type: FOLLOWING_PROCCESS, isFetching, userID });

export const getUsers = (selectedPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(selectedPage));
        dispatch(setToggleFetching(true));
        let data = await UsersAPI.getUsers(selectedPage, pageSize);
        dispatch(setToggleFetching(false));
        dispatch(setUser(data.items));
        dispatch(setTotalUsers(data.totalCount));
    }
}
export const unfollow = (id) => {
    return async (dispatch) => {
        let apiMethod = UsersAPI.followUser.bind(UsersAPI);
        let actionCreator = unfollowSuccess;
        dispatch(setToggleProgress(true, id));
        let data = await apiMethod(id)
        if (data.resultCode === 0) {
            dispatch(actionCreator(id));
        }
        dispatch(setToggleProgress(false, id));
    }
}
export const follow = (id) => {
    return async (dispatch) => {
        let apiMethod = UsersAPI.followUser.bind(UsersAPI);
        let actionCreator = followSuccess;
        dispatch(setToggleProgress(true, id));
        let data = await apiMethod(id);

        if (data.resultCode === 0) {
            dispatch(actionCreator(id));
        }
        dispatch(setToggleProgress(false, id));
    }
}

export default usersReducer;