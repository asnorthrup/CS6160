import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navigator from "./Navigator";
import { BrowserRouter as Router, Switch, Route, Link,} from 'react-router-dom'
import './index.css';

ReactDOM.render((
  <Router >
    <Switch>
      <Route path="/">
        <Navigator/>
        <App/>
      </Route>
    </Switch>
  </Router>),
  document.getElementById('root')
);