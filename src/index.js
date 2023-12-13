import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'
import Home from './pages/Home/Home';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
