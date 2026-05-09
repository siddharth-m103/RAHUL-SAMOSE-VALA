import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-samosa-dark text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-samosa-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold">RS</span>
              </div>
              <h3 className="text-xl font-playfair font-bold">Rahul Samosa Bala</h3>
            </div>
            <p className="text-black text-sm leading-relaxed">
              Serving the most delicious and crispy samosas since 1995. Made with love and traditional family recipe.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-black hover:text-samosa-orange transition-colors text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-black hover:text-samosa-orange transition-colors text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-black hover:text-samosa-orange transition-colors text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-black hover:text-samosa-orange transition-colors text-xl">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-black">
              <li><Link to="/" className="text-black hover:text-samosa-orange transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-black hover:text-samosa-orange transition-colors">Menu</Link></li>
              <li><Link to="/gallery" className="text-black hover:text-samosa-orange transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-black hover:text-samosa-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-black">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-samosa-orange mt-1" />
                <span className="text-black text-sm">Main Bazar, Chandni Chowk, Old Delhi - 110006</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-samosa-orange" />
                <span className="text-black text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-samosa-orange" />
                <span className="text-black text-sm">info@rahulsamosabala.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-black text-sm">
              <li>Monday - Sunday: 10:00 AM - 10:00 PM</li>
              <li>Open all days</li>
              <li className="mt-4">
                <span className="text-samosa-orange font-semibold">For Bulk Orders:</span>
                <br />
                Call us 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-black text-sm">
          <p>&copy; {currentYear} Rahul Samosa Bala. All rights reserved.</p>
          <p className="mt-2">Designed with ❤️ for samosa lovers</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer