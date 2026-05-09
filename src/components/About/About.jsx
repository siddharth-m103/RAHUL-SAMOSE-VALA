import React from 'react'
import { motion } from 'framer-motion'
import { FaMedal, FaLeaf, FaHeart } from 'react-icons/fa'

const About = () => {
  const features = [
    { icon: FaMedal, title: '30+ Years', desc: 'Of Excellence in Taste' },
    { icon: FaLeaf, title: 'Fresh Ingredients', desc: 'Daily Made Dough' },
    { icon: FaHeart, title: 'Secret Recipe', desc: 'Family Heritage Since 1995' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftb3NhfGVufDB8fDB8fHww" 
                alt="Making Samosas"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-samosa-orange text-white p-4 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">30+</p>
              <p className="text-sm">Years of<br/>Tradition</p>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 1995 by Rahul Sharma, Rahul Samosa Bala started as a small stall in the bustling streets of Old Delhi. What began as a dream to share authentic, crispy samosas has now become a beloved institution.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our secret lies in the perfect blend of premium quality ingredients, our special family masala recipe, and the dedication to make every samosa with love and care. Each samosa is handcrafted and fried to golden perfection.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon className="text-4xl text-samosa-orange mx-auto mb-3" />
                  <h3 className="font-bold text-lg text-samosa-dark">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About