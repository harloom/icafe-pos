import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "tailwindcss/tailwind.config";

import {  Provider } from 'react-redux';
import  {Store}  from './store';


ReactDOM.render(

    <Provider store={Store}>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
