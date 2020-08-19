import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostContainer';
import classes from './Profile.module.css';


const Profile = (props) => {
  return <div className = {classes.main}>
    <ProfileInfo savePhoto = {props.savePhoto} isOwner = {props.isOwner} profile = {props.profile} status = {props.status} 
    updateStatus = {props.updateStatus}/>
    <MyPostContainer profile = {props.profile} />
  </div>
}

export default Profile;