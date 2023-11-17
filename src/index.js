import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Toaster} from 'react-hot-toast';
import Main from './Main';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Toaster toastOptions={{
      style:{
        background:"rgb(30, 41, 59)",
        color:"#fff"
      }
    }}/>
    <Provider store={store}>
      <Main/>
    </Provider>
  </>
);
