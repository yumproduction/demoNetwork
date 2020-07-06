import { createSelector } from "reselect"

export const usersSelector = (state) =>{
    return state.usersPage.users
}

export const users = createSelector(usersSelector, (users)=>{
    return users.filter(u=> true);
})


export const getPageSize = (state) =>{
    return state.usersPage.pageSize
}

export const getPageSizeSuper = createSelector((state)=>{
    return state.usersPage.pageSize.filter(u=> true);
})

export const getTotalUsersCount = (state) =>{
    return state.usersPage.totalUserCount
}

export const getSelectedPage = (state) =>{
    return state.usersPage.selectedPage
}

export const getIsFetching = (state) =>{
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) =>{
    return state.usersPage.followingInProgress
}

