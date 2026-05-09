import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App