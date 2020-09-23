import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from '../Login/Login';
import ToysList from '../ToysList/ToysList'
import InOutComing from '../InOutComing/InOutComing';
import About from '../About/About';
import Transaction from '../Transaction/Transaction';
import CategoryList from '../CategoryList/CategoryList';

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
          <Route path='/incoming'>
            <InOutComing />
          </Route>
          <Route path='/outcoming'>
            <InOutComing />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/transactions'>
            <Transaction />
          </Route>
          <Route path='/categoryList'>
            <CategoryList />
          </Route>
      </Switch>
      </Router>
  );
}
