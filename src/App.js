import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './pages/homepage/homepage.styles.scss';
import './App.css'
import HomePage from './pages/homepage/HomePage.components';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;