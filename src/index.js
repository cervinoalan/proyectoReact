import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './screens/Router';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyApclbgp9cb7V4J4Xw-wnsMU1XzmpXVSlM",
  authDomain: "tecno-store-666e9.firebaseapp.com",
  projectId: "tecno-store-666e9",
  storageBucket: "tecno-store-666e9.appspot.com",
  messagingSenderId: "300486059267",
  appId: "1:300486059267:web:68de41e15468310675f536"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
