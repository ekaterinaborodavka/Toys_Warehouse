import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
} from "react-router-dom";

import Login from '../Login/Login';
import ToysList from '../ToysList/ToysList'

import './App.css';

export default function App() {

  return (
      <Router>
      <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/toyslist'>
            <ToysList />
          </Route>
      </Switch>
      </Router>
  );
}
