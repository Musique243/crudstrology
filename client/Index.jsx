import React from 'react';
import ReactDOM from 'react-dom/client';
import '../dist/styles.css';

import App from './App.jsx';
import Horoscope from './Astrology.jsx';
import CreateProfile from './ProfileCreation.jsx';
// import './styles.css';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);



ReactDOM.createRoot(document.getElementById('app')).render(
  // <React.StrictMode>
  //     <RouterProvider router={router} />
  // <div>
  <App />
  // </div>

  // </React.StrictMode>
);
