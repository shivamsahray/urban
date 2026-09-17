import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppButton(){
  const num = import.meta.env.VITE_WHATSAPP_NUMBER || '91XXXXXXXXXX'
  const href = `https://wa.me/${num}?text=${encodeURIComponent('Hello Urban Creation Interior, I would like to discuss an interior design project.')}`
  
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay: 0.5 }}
    >
      <MessageCircle size={24} className="md:w-6 md:h-6" />
    </motion.a>
  )
}
