import React from 'react';
import classes from './Dialogs.module.css'
import Message from './Messages/Message';
import DialogItem from './DialogItem/DialogItem';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {

    let messageElement = props.message.map(message =>
        <Message text={message.text} />);

    let dialogElement = props.dialog.map(dialog =>
        <DialogItem name={dialog.name} item={dialog.item} />);


    let addNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogElement}
            </div>
            <div className={classes.mesItem}>
                <div className={classes.messages}>
                    <p>{messageElement}</p>
                </div>
                <div className={classes.send}>
                    <AddMessageRedux onSubmit = {addNewMessage}/>
                </div>
            </div>
        </div>

    )
}

const AddMessage = (props) => {
    return <form action="" onSubmit={props.handleSubmit}>
        <Field component={'textarea'}
            name={'newMessageBody'}
            placeholder='Send message...' />
        <button className={classes.btn}>Send</button>
    </form>
}

const AddMessageRedux = reduxForm({ form: 'dialogsAddMessage' })(AddMessage);


export default Dialogs;