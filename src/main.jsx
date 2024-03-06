import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,createBrowserRouter,RouterProvider,createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Feedback from './pages/Feedback.jsx'
import Layout from './Layout.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='/home' element={<Home/>}/>
      <Route path="/feedback" element={<Feedback/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
