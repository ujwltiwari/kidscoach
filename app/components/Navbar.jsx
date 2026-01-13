import React, { useState } from 'react'
import { Star, Menu } from 'lucide-react'
import { motion } from 'motion/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Coaches', href: '#coaches' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo Section */}
          <div className='flex items-center space-x-2'>
            <div
              className='w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center'
              style={{ transform: 'rotate(320.58deg)' }}
            >
              <Star className='w-6 h-6 text-white fill-white' />
            </div>
            <span className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
              KidsCoach
            </span>
          </div>

          {/* Desktop Navigation */}
          <motion.ul
            variants={{
              open: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            initial='closed'
            animate='open'
            className='hidden md:flex items-center space-x-8'
          >
            {navLinks.map((link, idx) => (
              <motion.li
                key={idx}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -20 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  key={link.name}
                  href={link.href}
                  className='text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer'
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
            <motion.button
              variants={{
                closed: { opacity: 0, scale: 0.8 },
                open: { opacity: 1, scale: 1 },
              }}
              className='px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md'
            >
              Get Started
            </motion.button>
          </motion.ul>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-700 p-2 focus:outline-none'
            >
              <Menu className='w-6 h-6' />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Optional logic) */}
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='md:hidden bg-white border-t border-gray-100 overflow-hidden'
        >
          <div className='p-4 space-y-4 flex flex-col'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='block text-gray-700 hover:text-purple-600 font-medium py-2'
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className='w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium shadow-md active:scale-95 transition-transform'>
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
