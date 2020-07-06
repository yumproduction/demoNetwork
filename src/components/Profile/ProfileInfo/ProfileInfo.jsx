import React from 'react';
import classes from './ProfileInfo.module.css';
import user from '../../../assets/images/user.png';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return <div>
    <div className={classes.main}>
      <img src={props.profile.photos.large === null ||
        props.profile.photos.small === null ? user : props.profile.photos.large} className={classes.img} />
      <div className={classes.conText}>
        <h1 className={classes.head}>{props.profile.fullName}</h1>
        <div className={classes.profInfo}>
          <p>Facebook: <a href={props.profile.contacts.facebook}>{!props.profile.contacts.facebook ? '-'
              : props.profile.contacts.facebook}</a></p>
          <p>WebSite: <a href={props.profile.contacts.website === null ?
            null : props.profile.contacts.website}> {!props.profile.contacts.website ? '-'
              : props.profile.contacts.website}</a></p>
          <p>GitHub: <a href={!props.profile.contacts.github ?
            null : props.profile.contacts.github}>{!props.profile.contacts.github ? '-'
              : props.profile.contacts.github}</a></p>
        </div>
      </div>
      <div className={classes.jobInfo}>
    <br/>
          <h1 className={classes.head}>Job State</h1>
          <p>Looking For A Job: {props.profile.lookingForAJobDescription === null
           ? '-' : props.profile.lookingForAJobDescription}</p>
           <ProfileStatusWithHooks status = {props.status} updateStatus ={props.updateStatus}/>
        </div>
  </div>
    </div>
   
}

export default ProfileInfo;