import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Error from './routes/Error/index.jsx'
import EditarProduto from './routes/EditarProdutos/index.jsx'
import Aparelhos from './routes/Aparelhos/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/", element: <Home />
      },
      {
        path: "/aparelhos",
        element: <Aparelhos />
      },
      { 
        path: "/produtos/editar/:id", 
        element: <EditarProduto /> 
      },
      {
        path: "/antiga",
        element: <Navigate to="/"/>
      }

    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)