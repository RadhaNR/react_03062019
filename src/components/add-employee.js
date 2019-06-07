import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../actions/employeeActions.js';

class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userName: '',
                sapId: ''
            }
        }
    }

    handleChange = (event) => {
        //console.log(event.target.value);
        const {formData} = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });

    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.formData);
        this.props.actions.addEmployee(this.state.formData);
    }
    render() {
        return (
            <form>
                <input name="userName"  onChange={this.handleChange}/>
                <input name="sapId"  onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Add</button>
            </form>

        )
    }
}

const mapStateToProps = (state, nextProps) => {
    console.log(state);
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);