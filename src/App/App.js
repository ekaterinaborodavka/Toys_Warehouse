import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
} from "react-router-dom";

import Login from '../Login/Login';
import ToysList from '../ToysList/ToysList'
// import * as toysActions from '../Store/actions/toysAction';

import './App.css';

export default function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(toysActions.getToys());
  // }, [dispatch]);

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
