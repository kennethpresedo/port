import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'
import Home from './pages/Home/Home';

import { BrowserRouter, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <BrowserRouter>
                <Routes>
          
                </Routes>
            </BrowserRouter>
  </React.StrictMode>

);
