import React from 'react'
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import Paginator from '../Common/Paginator';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';

let User = ({ isFetching, portionSize, pageSize, users, selectedPage, followingInProgress, unfollow, follow, onPageChange, totalUserCount }) => {


    return <div>
        <Paginator portionSize = {portionSize} pageSize = {pageSize}onPageChange={onPageChange} 
        totalUserCount={totalUserCount} selectedPage = {selectedPage}/>
    {isFetching ? <Preloader /> : 
        <div>
            {
                users.map(u => <Users users = {u}
                                      followingInProgress = {followingInProgress}
                                      key={u.id}
                                      unfollow = {unfollow}
                                      follow = {follow}/>)
            }
        </div>
}
    </div>
}

export default User;