import React from 'react';
import ReactDOM from 'react-dom';
// Adding Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ScreenIt from "./ScreenIt";
import reportWebVitals from './reportWebVitals';

var destination = document.querySelector(".custom-container");

ReactDOM.render(
  <div className="col-lg-6 col-md-6">
    <ScreenIt/>
  </div>,
  destination
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
