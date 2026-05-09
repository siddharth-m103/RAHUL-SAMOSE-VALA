import React from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      text: 'Best samosas in town! The crispy exterior and delicious filling are absolutely perfect. I order from Rahul Samosa every week!',
      image: '/images/testimonials/person1.jpg'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Noida',
      rating: 5,
      text: 'Authentic taste that reminds me of my childhood. Their special chutney is amazing! Highly recommended for samosa lovers.',
      image: '/images/testimonials/person2.jpg'
    },
    {
      id: 3,
      name: 'Anjali Mehta',
      location: 'Gurgaon',
      rating: 4,
      text: 'Great quality and hygiene. The paneer samosa is my favorite. Quick delivery through WhatsApp order is very convenient.',
      image: '/images/testimonials/person3.jpg'
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
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Join thousands of happy customers</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <FaQuoteLeft className="text-3xl text-samosa-orange mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-samosa-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials