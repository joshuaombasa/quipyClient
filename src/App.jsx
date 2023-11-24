import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Equipment from './pages/Equipment'
import Machinery from './pages/Machinery'
import SingleMachine from './pages/SingleMachine'
import VendorLayout from './components/VendorLayout'
import Dashboard from './pages/vendor/Dashboard'
import Income from './pages/vendor/Income'
import VendorEquipment from './pages/vendor/VendorEquipment'
import Reviews from './pages/vendor/Reviews'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='equipment' element={<Machinery />} />
          <Route path='equipment/:id' element={<SingleMachine />} />
          <Route path='vendor' element={<VendorLayout />}>
            <Route index element={<Dashboard/>}/>
            <Route path='income' element={<Income/>}/>
            <Route path='equipment' element={<VendorEquipment/>}/>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
        </Route>
      </>
    )
  )

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>

  )
}

export default App
