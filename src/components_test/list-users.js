import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userAction from '../actions/userAction.js';

class ListUsers extends Component {
  
  delete(user) {
      console.log(user);
      this.props.actions.removeUser(user.sapId);
  }
    render() {
        console.log(this.props.users)
        return (
            <div>
            { this.props.users.length ? `No of user is: ${this.props.users.length}`: "No users available"}
                {
                    this.props.users.map((user, i) => {
                        return <div key={i}>{user.userName} - {user.sapId} <button onClick={()=>this.delete(user)}>Delete</button></div>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state, nextProps) => {
    return {
        users: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(userAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);