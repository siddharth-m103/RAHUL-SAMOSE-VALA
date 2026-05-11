import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTimes, FaHeart } from 'react-icons/fa'

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = ['all', 'samosas', 'making', 'shop', 'customers']
  
  const galleryImages = [
    { id: 1, src: 'https://plus.unsplash.com/premium_photo-1695297516676-04a259917c03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftb3NhfGVufDB8fDB8fHww', category: 'samosas', title: 'Freshly Fried Samosas', description: 'Golden brown and crispy' },
    { id: 2, src: 'https://plus.unsplash.com/premium_photo-1770505479076-bad4494ba600?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q0hBSSUyMFNIT1B8ZW58MHx8MHx8fDA%3D', category: 'making', title: 'Handcrafting Process', description: 'Made with love' },
    { id: 3, src: 'https://images.unsplash.com/photo-1504465117220-78098ba506d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q0hBSSUyMFNIT1B8ZW58MHx8MHx8fDA%3D', category: 'samosas', title: 'Crispy Golden Brown', description: 'Perfectly fried' },
    { id: 4, src: 'https://images.unsplash.com/photo-1536514888772-a269c6a8a198?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q0hBSSUyMFNIT1B8ZW58MHx8MHx8fDA%3D', category: 'shop', title: 'Our Shop Front', description: 'Welcoming customers since 1995' },
    { id: 5, src: 'https://plus.unsplash.com/premium_photo-1695297515191-5870e86dcbe0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbW9zYXxlbnwwfHwwfHx8MA%3D%3D', category: 'customers', title: 'Happy Customers', description: 'Serving with smile' },
    { id: 6, src: 'https://images.unsplash.com/photo-1683533678059-63c6a0e9e3ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWFsb28lMjB0aWtraXxlbnwwfHwwfHx8MA%3D%3D', category: 'samosas', title: 'Special Combos', description: 'Great value meals' },
    { id: 7, src: 'https://images.unsplash.com/photo-1723107995020-ecf4e410c4b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFsZWJpfGVufDB8fDB8fHww', category: 'making', title: 'Secret Recipe', description: 'Our special spice blend' },
    { id: 8, src: 'https://plus.unsplash.com/premium_photo-1695297516142-398762d80f66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNhbW9zYXxlbnwwfHwwfHx8MA%3D%3D', category: 'customers', title: 'Celebrations', description: 'Making moments special' },
    { id: 9, src: 'https://media.istockphoto.com/id/979914742/photo/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-crockery-over-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=8pmBVIcNb-GIFnsBT0sYqfy-YtzNq7pOqc6lQZgFOPo=', category: 'shop', title: 'Clean Kitchen', description: 'Hygiene is our priority' }
  ]

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-samosa-dark to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair font-bold mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            A visual journey of our delicious samosas and happy moments
          </motion.p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-samosa-orange text-white'
                    : 'bg-white text-gray-700 hover:bg-samosa-orange hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold mb-1">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-samosa-orange rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <FaHeart className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl w-full">
            <button 
              className="absolute -top-12 right-0 text-white text-3xl hover:text-samosa-orange transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="text-white text-center mt-6">
              <h3 className="text-2xl font-playfair font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryPage