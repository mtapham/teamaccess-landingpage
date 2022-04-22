import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD5rE8aqXkSZI_qWKPFPonaCTvvmlzDNCg",
  authDomain: "connecta-b3be0.firebaseapp.com",
  projectId: "connecta-b3be0",
  storageBucket: "connecta-b3be0.appspot.com",
  messagingSenderId: "752714664335",
  appId: "1:752714664335:web:0426e927fdd4d059d963fa"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);