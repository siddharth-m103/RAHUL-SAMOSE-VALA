export const sendWhatsAppOrder = (orderDetails) => {
  const phoneNumber = '919876543210' // Without + sign
  let message = 'Hi Rahul Samosa Bala,%0A%0AI would like to place an order:%0A%0A'
  
  if (orderDetails.items && orderDetails.items.length > 0) {
    orderDetails.items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x ${item.quantity} - ₹${item.price * item.quantity}%0A`
    })
    message += `%0ATotal Amount: ₹${orderDetails.total}%0A`
  }
  
  message += `%0ADelivery Address: ${orderDetails.address || 'To be shared'}%0A`
  message += `Contact Number: ${orderDetails.phone || 'To be shared'}%0A%0A`
  message += `Please confirm my order. Thank you!`
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
  window.open(whatsappUrl, '_blank')
}

export const sendWhatsAppEnquiry = (enquiryDetails) => {
  const phoneNumber = '919876543210'
  let message = `Hi Rahul Samosa Bala,%0A%0AI have a question:%0A%0A`
  message += `Name: ${enquiryDetails.name}%0A`
  message += `Question: ${enquiryDetails.message}%0A`
  message += `Contact: ${enquiryDetails.phone || 'Not provided'}`
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
  window.open(whatsappUrl, '_blank')
}

export const openWhatsAppChat = () => {
  const phoneNumber = '919876543210'
  const message = 'Hi%20Rahul%20Samosa%20Bala%2C%20I%20have%20a%20question%20about%20your%20menu.'
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
}