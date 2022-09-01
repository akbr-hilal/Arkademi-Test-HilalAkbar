import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import "swiper/css/bundle";

// set favicon
import Favicon from './assets/logo/favicon.png'
const favicon = document.getElementById("idFavicon")
favicon.setAttribute("href", Favicon)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);