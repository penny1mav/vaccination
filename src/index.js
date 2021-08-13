
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  //το router είναι το navigation bar μας που μας ανακατευθύνει στις αλλές σελίδες
  //app είναι ο πυρήνας του προγράμματος , εκεί που ορίζουμε το πώς δομείται το header το main body Και το fouter
  <React.StrictMode>

    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);