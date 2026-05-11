import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaEnvelope, FaPhone, FaComment, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission (you can integrate emailjs or backend)
    alert('Thank you! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210?text=Hi%20Rahul%20Samosa%20Bala%2C%20I%20have%20a%20question%20about%20your%20services', '_blank')
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">We'd love to hear from you!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-playfair font-bold text-samosa-dark mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-samosa-orange bg-opacity-10 rounded-full flex items-center justify-center">
                    <FaPhone className="text-samosa-orange text-xl" />
                  </div>
                  <div>
  <h4 className="font-bold mb-1">Phone Number</h4>

  <a
    href="https://wa.me/917526832341"
    target="_blank"
    rel="noopener noreferrer"
    className="block text-gray-600 hover:text-green-600 transition-colors"
  >
    +91 75268 32341
  </a>

  <a
    href="https://wa.me/917526832341"
    target="_blank"
    rel="noopener noreferrer"
    className="block text-gray-600 hover:text-green-600 transition-colors"
  >
    WhatsApp Support
  </a>
</div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-samosa-orange bg-opacity-10 rounded-full flex items-center justify-center">
                    <FaWhatsapp className="text-samosa-orange text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">WhatsApp</h4>
                   <a
  href="https://wa.me/917526832341"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 hover:text-green-600 transition-colors"
>
     +91 75268 32341
</a>
                    <button 
                      onClick={handleWhatsAppClick}
                      className="text-samosa-orange font-semibold text-sm hover:underline mt-1"
                    >
                      Chat with us →
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-samosa-orange bg-opacity-10 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-samosa-orange text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-gray-600">Main Bazar, Chandni Chowk</p>
                    <p className="text-gray-600">Old Delhi, Delhi - 110006</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-samosa-orange bg-opacity-10 rounded-full flex items-center justify-center">
                    <FaClock className="text-samosa-orange text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Opening Hours</h4>
                    <p className="text-gray-600">Monday - Sunday: 10:00 AM - 10:00 PM</p>
                    <p className="text-gray-600">Open all days</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <iframe
  title="Location Map"
  src="https://www.google.com/maps?q=8,+Excellence Technology,+Phase-8,+Industrial+Area,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160055&output=embed"
  className="w-full h-64 rounded-lg"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
></iframe>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-playfair font-bold text-samosa-dark mb-6">Send us a Message</h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaUser className="inline mr-2 text-samosa-orange" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-samosa-orange transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaEnvelope className="inline mr-2 text-samosa-orange" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-samosa-orange transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaPhone className="inline mr-2 text-samosa-orange" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-samosa-orange transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaComment className="inline mr-2 text-samosa-orange" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-samosa-orange transition-colors resize-none"
                    placeholder="Tell us about your order or feedback..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm