import React from 'react'
import User from './User';
import Preloader from '../Common/Preloader/Preloader';
import { connect } from 'react-redux';
import { unfollow, follow, getUsers, setCurrentPage, setToggleProgress } from './../../Redux/UsersReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { users, getPageSize, getSelectedPage, getTotalUsersCount, getIsFetching, getFollowingInProgress, usersSuper } from '../../Redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        const {selectedPage, pageSize} = this.props;
        this.props.getUsers(selectedPage, pageSize);

        // this.props.setToggleFetching(true);
        // UsersAPI.getUsers(this.props.selectedPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.setToggleFetching(false);
        //         this.props.setUser(data.items);
        //         this.props.setTotalUsers(data.totalCount);
        //     });

    }

    onPageChange = (p) => {
        const {pageSize} = this.props;
        this.props.getUsers(p, pageSize);
    }

    render() {
        return            <User isFetching = {this.props.isFetching}
        onPageChange={this.onPageChange}
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                selectedPage={this.props.selectedPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                portionSize = {this.props.portionSize} />
    }
}

let mapStateToProps = (state) => {
    return {
        users: users(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUsersCount(state),
        selectedPage: getSelectedPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: state.usersPage.portionSize
    }
}

export default compose(
    connect(mapStateToProps,
        {
            follow, unfollow, setCurrentPage,
            setToggleProgress, getUsers
        })
)(UsersContainer);