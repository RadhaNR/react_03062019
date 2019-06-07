import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as userActions from '../actions/userAction.js';

class AddUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userName: '',
                sapId: 0
            }
        }
    }

    handleChange = (event) => {
        const {formData} = this.state
        formData[event.target.name] = event.target.value;
        this.setState({formData}) 
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.formData);
        this.props.actions.addUser(this.state.formData);
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="userName" value={this.userName} onChange={this.handleChange} />
                    <input type="text" name="sapId" value={this.sapId} onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, nextProps) => {
    console.log(state);
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddUser);