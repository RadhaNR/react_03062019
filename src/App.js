import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, HashRouter} from 'react-router-dom';


import First from './components/first.js';
import Second from './components/second.js';
import Lifecyle from './components/lifecycle.js';
import NotFound from './components/not-found.js';
import AddEmployee from './components/add-employee.js';
import EmployeeList from './components/employees-list.js';
import Chart from './components/chart.js';
import ControlledComp, {UnControlledComp} from  './components/controlled-comp.js';
import ProductList from './components/product-list.js';
import CartList from './components/cart-list.js';

import C1 from './components/c1.js';

import { withTranslation, Translation  } from 'react-i18next';
 
class  App extends Component {
// constructor() {
//   super();
  
//     let { i18n  } = this.props;
//     i18n.changeLanguage("en");
// }
  handleSelect = (event) =>{
    let { i18n  } = this.props;
    i18n.changeLanguage(event.target.value);
  }
 

  render() {
 // const { t, i18n } = useTranslation("messages");
  let { t  } = this.props;
  //console.log(t)
  return (
    <div className="App">
    <div> {t('title')}</div>;
    <select onChange={this.handleSelect}>
      <option value="en">English</option>
      <option value="de">Dutch</option>
    </select>
    
      <HashRouter>
        <div>
          <Link to="/first"> {t('first')} | </Link>
           <Link to="/second">{t('second')} | </Link>
           <Link to="/lifecycle">{t('lifeCycle')} | </Link>
           <Link to="/context">{t('contextApi')} | </Link>
           <Link to="/addEmployee">{t('addEmployeeLabel')} |</Link>
           <Link to="/employeeList">{t('employeeList')} | </Link>
           <Link to="/chart">{t('chartLabel')} | </Link>
           <Link to="/controlled">{t('controlledComponent')}  |  </Link>
           <Link to="/uncontrolled">{t('unControlledComponent')}  | </Link>
           <Link to="/productList">{t('productList')}  | </Link>
           <Link to="/cartList">{t('cartList')}  | </Link>
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
          <Route path="/controlled" component={ControlledComp} />
          <Route path="/uncontrolled" component={UnControlledComp} />
          <Route path="/productList" component={ProductList} />
          <Route path="/cartList" component={CartList} />

          <Route component={NotFound}/>  
         </Switch>
      </HashRouter>
   
    </div>
  );
  }
}

export default withTranslation("translation")(App);
