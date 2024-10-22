import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import NavBar from './Navbar/NavBar.tsx';
import Catalogo from './Catalogo/Catalogo.jsx';
import './App.css';

// Criando as rotas da aplicação
const router = createBrowserRouter([
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
]);

// Renderizando a aplicação
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
