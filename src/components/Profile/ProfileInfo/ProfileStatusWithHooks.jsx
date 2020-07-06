import React, { useEffect, useState} from 'react';
import classes from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);

    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    }, [props.status]);

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return <div className={classes.status}>
        <div>
            <h1 className={classes.head}>Status</h1>
        </div>
        <div>
            <input type="text" placeholder='No status'
                className={classes.input}
                onClick={activateEditMode}
                onBlur={deactivateEditMode}
                onChange= {onStatusChange}
                value={status} />
        </div>
        <div>
            {editMode &&
                <button className={classes.btn}>Save</button>
            }
        </div>
        <br />
    </div>
}

export default ProfileStatusWithHooks;
