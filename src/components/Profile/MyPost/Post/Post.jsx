import React from 'react';
import classes from './Post.module.css';
import user from '../../../../assets/images/user.png'

const Post = (props) => {
  return <div>
    <div className={classes.item}>
      {!props.profile ? <img src = {user} className = {classes.img}/> : <img src={props.profile.photos.large === null ||
        props.profile.photos.small === null ? user : props.profile.photos.large} className={classes.img} />}
  
      <p>{props.message}</p>
    </div>
    <span>Likes: </span>{props.likes}
  </div>
}

export default Post;