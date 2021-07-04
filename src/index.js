import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux'
import {persistGrate} from 'redux-persist/integration/react'
import {store, presistor} from './redux/store'

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <persistGrate presistor={presistor}>
  <App />
  </persistGrate>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);