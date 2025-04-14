import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// react creates its own DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  // hum ne apna custom tag bna rakha hai.
  </React.StrictMode>
);


