import React from 'react'
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import Paginator from '../Common/Paginator';

let Users = ({ portionSize, currentPage, pageSize, users, selectedPage, followingInProgress, unfollow, follow, onPageChange, totalUserCount }) => {


    return <div>
        <Paginator portionSize = {portionSize} currentPage={currentPage} pageSize = {pageSize}onPageChange={onPageChange} 
        totalUserCount={totalUserCount} selectedPage = {selectedPage}/>

        {users.map(u => <div key={u.id}>
            <div className={classes.users}>
                <div className={classes.user}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ?
                            u.photos.small : userPhoto}
                            alt="" className={classes.img} />
                    </NavLink>
                    {u.followed ?
                        <button disabled={followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                unfollow(u.id);
                            }}
                            className={classes.btn}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                follow(u.id);
                            }}
                            className={classes.btn}>Follow</button>}
                </div>
                <div className={classes.info}>
                    <div className={classes.ns}>
                        <div className={classes.name}>
                            {u.name}
                        </div>
                        <div className={classes.status}>
                            {u.status}
                        </div>
                    </div>
                    <div className="gap"></div>
                    <div className={classes.location}>
                        <div className={classes.city}>
                            {"u.location.city"},
                        </div>
                        <div className={classes.country}>
                            {"u.location.country"}
                        </div>
                    </div>
                </div>
            </div>
        </div>)}
    </div>
}

export default Users;