import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Mens from './pages/Mens'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Footer from './components/Footer'

const App = () => {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Mens />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
