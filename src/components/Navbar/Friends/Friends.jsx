import React from 'react';
import classes from './Friends.module.css';
import FriendOne from './FriendOne';

const Friends = (props) => {

  // let friends = props.state.sidebar.friends.map(friends => 
  // <FriendOne name = {friends.friend}/>)

  return <div className={classes.friends}>
    {/* <div>
      <p className={classes.head}>Friends</p>
    </div>
    <div className = {classes.items}>
      {friends}
    </div> */}
  </div>
}

export default Friends;