import React from 'react';
import ReactDom from 'react-dom';
import'./index.css';
import {BrowserRouter} from "react-router-dom";
//import Time from './Time';
 import App from './App';

ReactDom.render(
<BrowserRouter>
<App />
</BrowserRouter>,document.getElementById('root')); 








