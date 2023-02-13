import React from 'react';
import ReactDOM from 'react-dom/client';
import { LandingPage } from './components/LandingPage.js';
import { BuilderPage } from './components/BuilderPage.js';
import './css/Reset.css';
import './css/Landingpage.css';
import './css/BuilderPage.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/cv-application",
    element:<LandingPage /> ,
  },
  {
    path: "/Builder",
    element:<BuilderPage /> ,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

