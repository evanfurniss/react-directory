import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

//Compiles all information on App and pushes it to the main html file in the public folder
ReactDOM.render(<App />, document.getElementById('root'));