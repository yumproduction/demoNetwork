import React from 'react';
import classes from './ProfileInfo.module.css';
import { maxLengthCreator } from '../../../utils/validators/validators';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) 
        this.setState({ status: this.props.status });
    }

    // AddStatus = () => {
    //     return <form onSubmit = { this.props.handleSubmit}>
    //         <Field component = {'input'} type="text" 
    //         name={'status'}placeholder='Enter status...'
    //                 onClick={this.activateEditMode}
    //                 onBlur={this.deactivateEditMode}
    //                 value={!this.state.status ? '' : this.state.status} />

    //             <div>{this.state.editMode ? <button className={classes.btn}>Save</button> : null}</div>
    //     </form>
    // }

    // AddStatusRedux = reduxForm({ form: 'status' })(this.AddStatus);
    

    render() {
        return <div className={classes.status}>
            <div>
                <h1 className={classes.head}>Status</h1>
            </div>


            {/* <this.AddStatusRedux onSubmit = {this.onStatusChange}/> */}


            <div>
                <input type="text" placeholder='No status'
                    className = {classes.input}
                    onChange={this.onStatusChange}
                    onClick={this.activateEditMode}
                    onBlur={this.deactivateEditMode}
                    value={this.state.status}
                    validate={maxLengthCreator(15)}/>
                    
            </div>
            <div>
                {this.state.editMode ? <button className={classes.btn}>Save</button> : null}
            </div> 
            <br />
        </div>
    }
}

export default ProfileStatus;
