import React from 'react'
import { FaStar, FaWhatsapp } from 'react-icons/fa'

const MenuCard = ({ item }) => {
  const handleOrder = () => {
    window.open(`https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20${item.name}`, '_blank')
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {item.popular && (
          <span className="absolute top-4 right-4 bg-samosa-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
            Popular
          </span>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-playfair font-bold text-samosa-dark">{item.name}</h3>
          <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
            <FaStar className="text-yellow-500 text-sm" />
            <span className="text-sm font-semibold">{item.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-samosa-orange">{item.price}</span>
          <button 
            onClick={handleOrder}
            className="bg-samosa-orange text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
          >
            <FaWhatsapp />
            Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuCard