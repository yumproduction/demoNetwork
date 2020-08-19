import React from 'react';
import { sendMessage } from '../../Redux/DialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {

    return {
        message: state.messagePage.message,
        dialog: state.messagePage.dialog,
        newMessageItem: state.messagePage.newMessageItem,
        nightMode: state.app.nightMode
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}), 
    withAuthRedirect
)(Dialogs);