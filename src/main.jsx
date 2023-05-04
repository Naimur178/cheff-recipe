import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/layout/Main.jsx'
import Home from './components/Home/Home.jsx'
import Blog from './components/Blog/Blog.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import ChefRecipies from './components/layout/ChefRecipies.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import PrivateRoute from './components/routes/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/chefReciepe/:id',
        element: <PrivateRoute><ChefRecipies></ChefRecipies></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
