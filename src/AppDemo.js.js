import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import ClassComponent from './components/class-component.js';
import FunctionComponent from './components/function-component.js';
import StateProps from './components/state-props.js';
import LifecycleComponent from './components/lifecycle-component.js';
import ParentChild from './components/parent-child.js';

import NotFound from './components/not-found.js';

import { useTranslation} from 'react-i18next';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/class">Class Component | </Link>
          <Link to="/fun">Function Component | </Link>
          <Link to="/stateProps">State Props | </Link>
          <Link to="/lifecycle">Lifecycle | </Link>
          <Link to="/p-to-c">Parent to Child | </Link>
          </div>
        <Switch>
          <Route path="/" component={ClassComponent} exact/>
          <Route path="/class" component={ClassComponent} />
          <Route path="/fun" component={FunctionComponent} />
          <Route path="/stateProps" component={StateProps} />
          <Route path="/lifecycle" component={LifecycleComponent} />
          <Route path="/p-to-c" component={ParentChild} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
