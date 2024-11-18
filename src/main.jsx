
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import NavBar from './Navbar/NavBar.tsx';
import Catalogo from './Catalogo/Catalogo.jsx';
import News from './News/News.jsx'; 
import './App.css';
import Acessibilidade from './Acessibilidade/Acessibilidade.jsx';



const router = createBrowserRouter([
  {
  path: 'acessibilidade',
  element: (
    <>
      <NavBar />
      <Acessibilidade />
    </>
  ),
},

  {
    path: '/',
    element: (
      <>
        <NavBar />
        <App />
      </>
    ),
  },
  {
    path: 'catalogo',
    element: (
      <>
        <NavBar />
        <Catalogo />
      </>
    ),
  },
  {
    path: 'news', 
    element: (
      <>
        <NavBar />
        <News />
      </>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
