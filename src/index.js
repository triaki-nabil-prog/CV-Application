import React from 'react';
import ReactDOM from 'react-dom/client';
import { LandingPage } from './components/LandingPage.js';
import './css/Reset.css';
import './css/Landingpage.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);

