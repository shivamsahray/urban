export default function WhatsAppButton(){
  const num = import.meta.env.VITE_WHATSAPP_NUMBER || '91XXXXXXXXXX'
  const href = `https://wa.me/${num}?text=${encodeURIComponent('Hello Urban Creation Interior, I would like to discuss an interior design project.')}`
  return (
    <a className="whatsapp" href={href} target="_blank" aria-label="Chat on WhatsApp">WA</a>
  )
}
