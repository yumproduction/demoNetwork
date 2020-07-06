import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostContainer';
import classes from './Profile.module.css';


const Profile = (props) => {
  return <div className = {classes.main}>
    <ProfileInfo profile = {props.profile} status = {props.status} 
    updateStatus = {props.updateStatus}/>
    <MyPostContainer profile = {props.profile} />
  </div>
}

export default Profile;