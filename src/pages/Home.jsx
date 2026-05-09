import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Menu from '../components/Menu/Menu'
import SpecialCombo from '../components/SpecialCombo/SpecialCombo'
import Gallery from '../components/Gallery/Gallery'
import Testimonials from '../components/Testimonials/Testimonials'
import ContactForm from '../components/ContactForm/ContactForm'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Menu />
      <SpecialCombo />
      <Gallery />
      <Testimonials />
      <ContactForm />
    </div>
  )
}

export default Home