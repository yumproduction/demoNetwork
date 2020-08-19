import React from 'react';
import classes from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
        validate: true,
        message: null
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

    maxLengthCreator = (e) => {
        if (e.currentTarget.value.length > 15) {
            this.setState({
                validate: false,
                message: 'Status should not be more than 15 symblos'
            });
            return;
        }
        else {
            this.onStatusChange(e);
            this.setState({
                validate: true
            });
        }
    }

    render() {
        return <div className={classes.status}>
            <div>
                <h1 className={classes.head}>Status</h1>
            </div>


            {/* <this.AddStatusRedux onSubmit = {this.onStatusChange}/> */}


            <div>
                <input type="text" placeholder='No status'
                    className={classes.input + ' ' + this.state.validate === false ? classes.error : ''}
                    onChange={this.maxLengthCreator}
                    onClick={this.activateEditMode}
                    onBlur={this.deactivateEditMode}
                    value={this.state.status} />
            </div>
            <div className={classes.error}>{this.state.message}</div>
            <div>
                {this.state.editMode ? <button className={classes.btn}>Save</button> : null}
            </div>
            <br />
        </div>
    }
}

export default ProfileStatus;
