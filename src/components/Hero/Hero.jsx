import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Hero = () => {
  const handleWhatsAppOrder = () => {
    window.open('https://wa.me/919876543210?text=Hi%20Rahul%20Samosa%20Bala%2C%20I%20want%20to%20place%20an%20order', '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-banner.jpg" 
          alt="Delicious Samosas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-4"
          >
            Crispy, Spicy & Delicious
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-samosa-orange mb-6"
          >
            Rahul Samosa Bala
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Experience the authentic taste of traditional Indian samosas made with love and secret spices since 1995.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button onClick={handleWhatsAppOrder} className="btn-primary flex items-center justify-center gap-2 text-white">
              <FaWhatsapp className="text-xl text-white" />
              Order on WhatsApp
            </button>
            <button className="btn-secondary bg-white bg-opacity-20 backdrop-blur-sm text-black border-white">
              View Menu
            </button>
          </motion.div>

          {/* Features */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 pt-8 border-t border-white border-opacity-30"
          >
            <div className="flex items-center justify-center gap-3 text-white">
              <FaMapMarkerAlt className="text-samosa-orange text-xl" />
              <span>Main Bazar, Old Delhi</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <FaClock className="text-samosa-orange text-xl" />
              <span>10 AM - 10 PM | All Days</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <FaWhatsapp className="text-samosa-orange text-xl" />
              <span>+91 98765 43210</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero