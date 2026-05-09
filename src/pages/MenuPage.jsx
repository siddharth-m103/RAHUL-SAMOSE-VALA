import React from 'react'
import { motion } from 'framer-motion'
import MenuCard from '../components/Menu/MenuCard'

const MenuPage = () => {
  const menuCategories = {
    'Samosas': [
      {
        id: 1,
        name: 'Classic Samosa',
        price: '₹20',
        description: 'Traditional potato-filled samosa with our special spice blend',
        image: 'https://plus.unsplash.com/premium_photo-1695297516710-854716c51121?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.8,
        popular: true
      },
      {
        id: 2,
        name: 'Punjabi Samosa',
        price: '₹25',
        description: 'Stuffed with spiced potatoes, peas, and special Punjabi masala',
        image: 'https://images.unsplash.com/photo-1666190091090-1d312a4b04c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U0FNT1NBfGVufDB8fDB8fHww',
        rating: 4.9,
        popular: true
      },
      {
        id: 3,
        name: 'Paneer Samosa',
        price: '₹30',
        description: 'Creamy paneer filling with aromatic Indian spices',
        image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U0FNT1NBfGVufDB8fDB8fHww',
        rating: 4.7,
        popular: false
      },
      {
        id: 4,
        name: 'Chicken Samosa',
        price: '₹35',
        description: 'Spicy minced chicken filling with herbs',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U0FNT1NBfGVufDB8fDB8fHww',
        rating: 4.6,
        popular: true
      },
      {
        id: 5,
        name: 'Keema Samosa',
        price: '₹40',
        description: 'Minced mutton with aromatic spices',
        image: 'https://images.unsplash.com/photo-1566222499048-9538f86d4675?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNBTU9TQXxlbnwwfHwwfHx8MA%3D%3D',
        rating: 4.8,
        popular: true
      },
      {
        id: 6,
        name: 'Cheese Corn Samosa',
        price: '₹35',
        description: 'Melted cheese and sweet corn filling',
        image: 'https://images.unsplash.com/photo-1697155836252-d7f969108b5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFNBTU9TQXxlbnwwfHwwfHx8MA%3D%3D',
        rating: 4.5,
        popular: false
      }
    ],
    'Sweets': [
      {
        id: 7,
        name: 'Jalebi',
        price: '₹15',
        description: 'Crispy spiral-shaped sweet soaked in sugar syrup',
        image: 'https://media.istockphoto.com/id/2223209387/photo/jalebi-is-a-famous-indian-sweet-frying-sweets-jalebi-in-oil-indian-bangali-and-pakistani.webp?a=1&b=1&s=612x612&w=0&k=20&c=gtlHlH5Ojg8rWYx7RBsjAxDHgNJQijeN2ZD2tGWW8IE=',
        rating: 4.5,
        popular: false
      },
      {
        id: 8,
        name: 'Gulab Jamun',
        price: '₹20',
        description: 'Soft milk dumplings in rose-scented sugar syrup',
        image: 'https://media.istockphoto.com/id/521802535/photo/gulab-jamun-12.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mri9HwChsS3eLZYXOMVHGL49Y3gLNhD-Ez-QIYeEfwQ=',
        rating: 4.7,
        popular: true
      },
      {
        id: 9,
        name: 'Rasgulla',
        price: '₹25',
        description: 'Spongy cottage cheese balls in light syrup',
        image: 'https://media.istockphoto.com/id/1283542929/photo/indian-rasgulla-or-dry-rosogulla-dessert-sweet-served-in-a-bowl.webp?a=1&b=1&s=612x612&w=0&k=20&c=jModAJ68gD3nzjUihAt-2NdZOZ2ilSI8IyUWByAvwV8=',
        rating: 4.4,
        popular: false
      }
    ],
    'Snacks': [
      {
        id: 10,
        name: 'chai',
        price: '₹20',
        description: 'Crispy potato patties with chutneys',
        image: 'https://images.unsplash.com/photo-1619581073186-5b4ae1b0caad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXxlbnwwfHwwfHx8MA%3D%3D',
        rating: 4.4,
        popular: false
      },
      {
        id: 11,
        name: 'Chole Bhature',
        price: '₹50',
        description: 'Spicy chickpeas with fried bread',
        image: 'https://media.istockphoto.com/id/979914742/photo/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-crockery-over-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=8pmBVIcNb-GIFnsBT0sYqfy-YtzNq7pOqc6lQZgFOPo=',
        rating: 4.6,
        popular: true
      },
      {
        id: 12,
        name: 'Pakora',
        price: '₹15',
        description: 'Mixed vegetable fritters',
        image: 'https://images.unsplash.com/photo-1765360024331-25b63e85272e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBha29yYXxlbnwwfHwwfHx8MA%3D%3D',
        rating: 4.3,
        popular: false
      }
    ]
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-samosa-orange to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair font-bold mb-4"
          >
            Our Delicious Menu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Explore our wide range of freshly made samosas, sweets, and snacks
          </motion.p>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {Object.entries(menuCategories).map(([category, items], categoryIndex) => (
            <div key={category} className="mb-16 last:mb-0">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-playfair font-bold text-samosa-dark mb-8 border-l-4 border-samosa-orange pl-4"
              >
                {category}
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <MenuCard item={item} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuPage