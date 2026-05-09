export const menuData = {
  samosas: [
    {
      id: 1,
      name: 'Classic Samosa',
      price: 20,
      description: 'Traditional potato-filled samosa with special spice blend',
      image: '/images/menu/classic-samosa.jpg',
      rating: 4.8,
      popular: true,
      category: 'samosas'
    },
    {
      id: 2,
      name: 'Punjabi Samosa',
      price: 25,
      description: 'Stuffed with spiced potatoes, peas, and Punjabi masala',
      image: '/images/menu/punjabi-samosa.jpg',
      rating: 4.9,
      popular: true,
      category: 'samosas'
    },
    {
      id: 3,
      name: 'Paneer Samosa',
      price: 30,
      description: 'Creamy paneer filling with aromatic Indian spices',
      image: '/images/menu/paneer-samosa.jpg',
      rating: 4.7,
      popular: false,
      category: 'samosas'
    }
  ],
  sweets: [
    {
      id: 4,
      name: 'Jalebi',
      price: 15,
      description: 'Crispy spiral-shaped sweet soaked in sugar syrup',
      image: '/images/menu/jalebi.jpg',
      rating: 4.5,
      popular: false,
      category: 'sweets'
    },
    {
      id: 5,
      name: 'Gulab Jamun',
      price: 20,
      description: 'Soft milk dumplings in rose-scented sugar syrup',
      image: '/images/menu/gulab-jamun.jpg',
      rating: 4.7,
      popular: true,
      category: 'sweets'
    }
  ],
  combos: [
    {
      id: 6,
      name: 'Family Feast',
      items: ['4 Samosas', '2 Jalebis', '1 Chutney'],
      price: 99,
      originalPrice: 150,
      saving: 51
    },
    {
      id: 7,
      name: 'Samosa Party',
      items: ['10 Samosas', '3 Chutneys', '1 Onion Salad'],
      price: 199,
      originalPrice: 280,
      saving: 81
    }
  ]
}   