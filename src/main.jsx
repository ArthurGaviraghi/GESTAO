import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Login from "./acessos/Login.jsx"
import Cadastro from "./acessos/Cadastro.jsx"
import Tarefas from "./acessos/Tarefas.jsx"
import Criar from "./acessos/Criar.jsx"
import Editar from "./acessos/Editar.jsx"

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/cadastro", element: <Cadastro /> },
  { path: "/tarefas", element: <Tarefas /> },
  { path: "/criar", element: <Criar /> },
  { path: "/editar/:id", element: <Editar /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
