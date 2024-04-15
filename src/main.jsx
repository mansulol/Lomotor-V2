import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Brand from './pages/Brand/Brand.jsx'
import Cars from './pages/Cars/Cars.jsx'
import Contact from './pages/Contact/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Brand' element={<Brand />}/>
        <Route path='/Cars' element={<Cars />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)