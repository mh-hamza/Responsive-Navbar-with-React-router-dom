import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Services from "./pages/Services/Services.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  { 
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/Contact',
        element: <Contact/>
      },
      {
        path: '/services',
        element: <Services/>
      },
      {
        path: '/portfolio',
        element: <Portfolio/>
      }
    ]
      
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
