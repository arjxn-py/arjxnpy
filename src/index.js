import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Added bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// Add our style
import './style/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

