import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Login from '../Login/Login';
import ToysList from '../ToysList/ToysList';
import InOutComing from '../InOutComing/InOutComing';
import About from '../About/About';
import Transaction from '../Transaction/Transaction';
import CategoryList from '../CategoryList/CategoryList';
import * as toysActions from '../../Store/actions/toysAction';
import * as categoriesActions from '../../Store/actions/categoriesAction';

import './App.css';

export default function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(localStorage.token){
      console.log(localStorage.token);
      dispatch(toysActions.getToys());
      dispatch(categoriesActions.getCategory());
      dispatch(toysActions.getTransactions());
    }
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        {!localStorage.token && 
          (<Route exact path='/'>
              <Login />
            </Route>)}
        <Route exact path={localStorage.token ? '/' : '/toyslist'}>
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
