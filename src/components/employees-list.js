import React, {Component} from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import * as employeeActions from '../actions/employeeActions.js';
import { withTranslation } from 'react-i18next';

class EmployeeList extends Component {

    delete = (employee) => {
        console.log(employee);
        this.props.actions.deleteEmployee(employee.sapId);
    }
    render() {
        const {t} = this.props
        return (
            <div>
            {this.props.employee.length ? <div>{t('noEmpCountText')}: {this.props.employee.length}</div>: <div>{t('noEmpText')}</div>}
                

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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(EmployeeList));
