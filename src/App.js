import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import First from './components/first.js';
import Second from './components/second.js';
import Lifecyle from './components/lifecycle.js';
import NotFound from './components/not-found.js';
import AddEmployee from './components/add-employee.js';
import EmployeeList from './components/employees-list.js';
import Chart from './components/chart.js';

import C1 from './components/c1.js';

class  App extends Component {

  handleSelect = (event) =>{
    console.log(event.target.value)
  }
  render() {
  return (
    <div className="App">
    <select onChange={this.handleSelect}>
      <option value="en">English</option>
      <option value="sp">Spanish</option>
      <option value="da">Dutch</option>
    </select>
      <BrowserRouter>
        <div>
          <Link to="/first">First | </Link>
           <Link to="/second">Second | </Link>
           <Link to="/lifecycle"> LifeCycle | </Link>
           <Link to="/context">Context API | </Link>
           <Link to="/addEmployee">Add Employee |</Link>
           <Link to="/employeeList">Employee List | </Link>
           <Link to="/chart">Chart </Link>
        </div>
        <Switch>
          <Route  path="/" component={First} exact/>
          <Route  path="/first" component={First} />
          <Route  path="/second" component={Second}/>
          <Route path="/lifecycle" component={Lifecyle} />
          <Route path="/context" component={C1} />
          <Route path="/addEmployee" component={AddEmployee} />
          <Route path="/employeeList" component={EmployeeList} />
          <Route path="/chart" component={Chart} />
          <Route component={NotFound}/>  
         </Switch>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
