import React, {Component} from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import * as employeeActions from '../actions/employeeActions.js';

class EmployeeList extends Component {

    delete = (employee) => {
        console.log(employee);
        this.props.actions.deleteEmployee(employee.sapId);
    }
    render() {
        return (
            <div>
            {this.props.employee.length ? <div>No of Employee's present: {this.props.employee.length}</div>: <div>No employees are avialable</div>}
                

                {
                    this.props.employee.map((employee, i) => {
                        return <div key={i}>
                            {employee.userName} - {employee.sapId} - <button onClick={()=>this.delete(employee)}>Delete</button>
                        </div> 
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = (state, nextProps) => {
    console.log(state);
   return {
       employee: state.employee
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
