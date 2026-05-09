import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { id: 1, src: 'https://plus.unsplash.com/premium_photo-1695297515191-5870e86dcbe0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbW9zYXxlbnwwfHwwfHx8MA%3D%3D', category: 'Samosas', title: 'Freshly Fried Samosas1' },
    { id: 2, src: 'https://media.istockphoto.com/id/1157402361/photo/mini-samosa-with-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=JuD_PgAANUCv3i5EP3384btNwJz_HT0PEov5XSMoXBk=', category: 'Making', title: 'Handcrafting Process' },
    { id: 3, src: 'https://plus.unsplash.com/premium_photo-1695297515191-5870e86dcbe0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbW9zYXxlbnwwfHwwfHx8MA%3D%3D', category: 'Samosas', title: 'Crispy Golden Brown' },
    { id: 4, src: 'https://images.unsplash.com/photo-1536514888772-a269c6a8a198?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q0hBSSUyMFNIT1B8ZW58MHx8MHx8fDA%3D', category: 'Shop', title: 'Our Shop Front' },
    { id: 5, src: 'https://images.unsplash.com/photo-1504465117220-78098ba506d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q0hBSSUyMFNIT1B8ZW58MHx8MHx8fDA%3D', category: 'Food', title: 'Serving Hot' },
    { id: 6, src: 'https://plus.unsplash.com/premium_photo-1770505479076-bad4494ba600?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q0hBSSUyMFNIT1B8ZW58MHx8MHx8fDA%3D', category: 'Celebration', title: 'Customer Love' },
  ]

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
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">A glimpse of our delicious world</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0., scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0  bg-opacity-group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="text-black text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute -top-12 right-0 text-white text-3xl hover:text-samosa-orange transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="text-white text-center mt-4">
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery