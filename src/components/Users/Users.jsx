import React from 'react'
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

let Users = ({ portionSize, pageSize, users, selectedPage, followingInProgress, unfollow, follow, onPageChange, totalUserCount }) => {


    return <div>
            <div className={classes.users}>
                <div className={classes.user}>
                    <NavLink to={'/profile/' + users.id}>
                        <img src={users.photos.small != null ?
                            users.photos.small : userPhoto}
                            alt="" className={classes.img} />
                    </NavLink>
                    {users.followed ?
                        <button disabled={followingInProgress.some(id => id === users.id)}
                            onClick={() => {
                                unfollow(users.id);
                            }}
                            className={classes.btn}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === users.id)}
                            onClick={() => {
                                follow(users.id);
                            }}
                            className={classes.btn}>Follow</button>}
                </div>
                <div className={classes.info}>
                    <div className={classes.ns}>
                        <div className={classes.name}>
                            {users.name}
                        </div>
                        <div className={classes.status}>
                            {users.status}
                        </div>
                    </div>
                    <div className="gap"></div>
                    <div className={classes.location}>
                        <div className={classes.city}>
                            {"users.location.city"},
                        </div>
                        <div className={classes.country}>
                            {"users.location.country"}
                        </div>
                    </div>
                </div>
            </div>
    </div>
}

export default Users;