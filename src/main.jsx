import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import React from 'react'
import Home from './routes/Home/index.jsx';
import Produtos from './routes/Produtos/index.jsx';
import Error from './routes/Error/index.jsx';
import EditarProdutos from './routes/EditarProdutos/index.jsx';
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
  errorElement: <Error/>,
  children:[
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "/produtos",
      element: <Produtos/>
    },
    {
      path: "/editar/produtos/:id",
      element: <EditarProdutos/>
    }
  ]

}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
