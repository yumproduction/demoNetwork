import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { requiredField, maxLengthCreator } from './../../../utils/validators/validators'
import { FormControl } from './../../FormsControls/FormsControls'

const MyPost = React.memo(props => {


  let postElements = [...props.post]
  .reverse()
  .map(post => {
    return <Post message={post.text} likes={post.likes} profile={props.profile} />
  });


  let onPostSubmit = (value) => {
    props.addPost(value.newPostBody);
  }


  return <div className={classes.form}>
    <div className={classes.newPost}>
      <h1 className={classes.head}>My posts</h1>
      <NewPostRedux onSubmit={onPostSubmit} />
    </div>
    <div className={classes.post}>
      <p>{postElements}</p>
    </div>
  </div>
})

const maxLength = maxLengthCreator(10);

let NewPost = (props) => {
  return <form action="" onSubmit={props.handleSubmit}>
    <Field component={FormControl} name={'newPostBody'}
      element='textarea'
      placeholder={'Send news...'}
      validate={[requiredField, maxLength]} />
    <button class={classes.btn}>Publish</button>
  </form>
}


const NewPostRedux = reduxForm({ form: 'newPostBody' })(NewPost);

export default MyPost;