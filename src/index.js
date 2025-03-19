import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Luxestay from "./components/LuxeStay";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Luxestay />
  </React.StrictMode>
);

reportWebVitals();
