import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './pages/homepage/homepage.styles.scss';
import './App.css'
import HomePage from './pages/homepage/HomePage.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;