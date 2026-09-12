export const company = {
  name: import.meta.env.VITE_COMPANY_NAME || 'Urban Creation Interior',
  tagline: 'Designing Spaces. Creating Experiences.',
  phone: import.meta.env.VITE_COMPANY_PHONE || '+91 XXXXX XXXXX',
  email: import.meta.env.VITE_COMPANY_EMAIL || 'hello@urbancreationinterior.com',
  location: import.meta.env.VITE_COMPANY_LOCATION || 'Your City, India',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '91XXXXXXXXXX',
}

export const companyStats = [
  { value: 'XX+', label: 'Projects' },
  { value: 'XX+', label: 'Clients' },
  { value: 'XX', label: 'Categories' },
]
