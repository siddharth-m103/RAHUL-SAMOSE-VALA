import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaGift } from 'react-icons/fa'

const SpecialCombo = () => {
  const combos = [
    {
      name: 'Family Feast',
      items: ['4 Samosas', '2 Jalebis', '1 Chutney'],
      price: '₹99',
      originalPrice: '₹150',
      saving: 'Save ₹51'
    },
    {
      name: 'Samosa Party',
      items: ['10 Samosas', '3 Chutneys', '1 Onion Salad'],
      price: '₹199',
      originalPrice: '₹280',
      saving: 'Save ₹81'
    },
    {
      name: 'Sweet Lover',
      items: ['6 Jalebis', '3 Samosas', '1 Gulab Jamun'],
      price: '₹149',
      originalPrice: '₹210',
      saving: 'Save ₹61'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <FaGift className="text-5xl text-samosa-orange animate-bounce" />
          </div>
          <h2 className="section-title">Special Combos</h2>
          <p className="section-subtitle">Get more value with our amazing combo offers!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {combos.map((combo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105"
            >
              <div className="bg-samosa-orange text-black p-4 text-center">
                <h3 className="text-2xl font-playfair font-bold">{combo.name}</h3>
              </div>
              
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {combo.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-orange rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-samosa-orange">{combo.price}</span>
                  <span className="text-gray-400 line-through ml-2">{combo.originalPrice}</span>
                  <div className="text-sm text-green-600 font-semibold mt-1">{combo.saving}</div>
                </div>
                
                <button className="w-full btn-primary flex items-center justify-center gap-2">
                  <FaWhatsapp />
                  Order Combo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecialCombo