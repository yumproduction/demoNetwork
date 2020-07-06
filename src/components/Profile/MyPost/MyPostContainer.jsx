import React from 'react';
import { addPost }
  from '../../../Redux/ProfileReducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    post: state.profilePage.post,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile
  }
}


export default connect(mapStateToProps, { addPost })(MyPost);;