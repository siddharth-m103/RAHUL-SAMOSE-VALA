import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm/ContactForm'

const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-samosa-orange to-orange-600 text-white py-16 pt-30">
"
        <div className="container mx-auto px-4 text-center ">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair font-bold mb-4 "
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto "
          >
            Have questions? We're here to help. Reach out to us anytime!
          </motion.p>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  )
}

export default ContactPage