import React from 'react'
import { motion } from 'framer-motion'
import MenuCard from './MenuCard'

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Classic Samosa',
      price: '₹20',
      description: 'Traditional potato-filled samosa with our special spice blend',
      image: 'https://media.istockphoto.com/id/1157402361/photo/mini-samosa-with-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=JuD_PgAANUCv3i5EP3384btNwJz_HT0PEov5XSMoXBk=',
      rating: 4.8,
      popular: true
    },
    {
      id: 2,
      name: 'Punjabi Samosa',
      price: '₹25',
      description: 'Stuffed with spiced potatoes, peas, and special Punjabi masala',
      image: 'https://media.istockphoto.com/id/1157402361/photo/mini-samosa-with-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=JuD_PgAANUCv3i5EP3384btNwJz_HT0PEov5XSMoXBk=',
      rating: 4.9,
      popular: true
    },
    {
      id: 3,
      name: 'Paneer Samosa',
      price: '₹30',
      description: 'Creamy paneer filling with aromatic Indian spices',
      image: 'https://media.istockphoto.com/id/1345733315/photo/close-up-image-of-fried-samosas-stuffed-with-spiced-potato-peas-and-meat-served-on-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=s0DnSs9wrbCNqu3eIqRYB0bFgsd2mL6Mer6yklMsBPY=',
      rating: 4.7,
      popular: false
    },
    {
      id: 4,
      name: 'Chicken Samosa',
      price: '₹35',
      description: 'Spicy minced chicken filling with herbs',
      image: 'https://plus.unsplash.com/premium_photo-1695297516142-398762d80f66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNhbW9zYXxlbnwwfHwwfHx8MA%3D%3D',
      rating: 4.6,
      popular: true
    },
    {
      id: 5,
      name: 'Jalebi',
      price: '₹15',
      description: 'Crispy spiral-shaped sweet soaked in sugar syrup',
      image: 'https://images.unsplash.com/photo-1723107995020-ecf4e410c4b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFsZWJpfGVufDB8fDB8fHww',
      rating: 4.5,
      popular: false
    },
    {
      id: 6,
      name: 'Aloo Tikki',
      price: '₹20',
      description: 'Crispy potato patties with chutneys',
      image: 'https://images.unsplash.com/photo-1683533678059-63c6a0e9e3ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWFsb28lMjB0aWtraXxlbnwwfHwwfHx8MA%3D%3D',
      rating: 4.4,
      popular: false
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Signature Samosas</h2>
          <p className="section-subtitle">Handcrafted with love and our secret family recipe since 1995</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MenuCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu