import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Auth from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/login' exact component={Auth} />
      <Route path='/register' exact component={Register} />
    </Switch>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
