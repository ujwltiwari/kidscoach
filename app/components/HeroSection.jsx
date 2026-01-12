import React from 'react'
import { motion } from 'motion/react'

const iconsAnimation = {
  animate: {
    rotate: [0, -20, 0],
    y: [0, -15, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

const HeroSection = () => {
  return (
    <div className='flex items-center px-24 gap-12'>
      {/* Left Content Column */}
      <div className='w-1/2 relative'>
        {/* Background blob - now behind everything */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -40, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute left-[calc(50%-40px)] bg-[#ECDFFC] w-[120px] h-[300px] rounded-full -z-10'
        />
        {/* Content wrapper or individual z-10 on each */}
        <div className='relative z-10'>
          {' '}
          {/* Add a wrapper with z-10, or add z-10 to each child below */}
          <span className='inline-block px-4 py-2 bg-gradient-to-r from-yellow-200 to-orange-200 text-orange-700 rounded-full mb-4'>
            ✨ Where Learning Meets Fun! ✨
          </span>
          <h1 className='text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent'>
            Unlock Your Child's Potential!
          </h1>
          <p className='text-xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0'>
            Expert coaching programs designed to help kids excel academically,
            build confidence, and discover their passions through engaging and
            interactive learning.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
            <button className='px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg'>
              Start Free Trial
            </button>
            <button className='px-8 py-4 border-2 border-purple-300 text-purple-600 rounded-full hover:bg-purple-50 transition-colors'>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Right Image Column */}
      <motion.div
        initial={{ opacity: 0, rotate: -5, y: -10 }}
        animate={{
          y: [0, -20, 0],
          opacity: 1,
          rotate: 0,
        }}
        transition={{
          // one-time animation for opacity + rotate
          opacity: { duration: 0.6, ease: 'easeInOut' },
          rotate: { duration: 0.6, ease: 'easeInOut' },

          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        className='w-1/2 justify-self-end'
      >
        <div className='relative' style={{ opacity: 1, transform: 'none' }}>
          <div
            className='relative rounded-3xl overflow-hidden shadow-2xl'
            style={{ transform: 'translateY(-0.697166px)' }}
          >
            <img
              src='https://images.unsplash.com/photo-1565373086464-c8af0d586c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY3MDYxOTU5fDA&ixlib=rb-4.1.0&q=80&w=1080'
              alt='Happy children learning'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20' />
          </div>

          {/* Floating Icon 1 - Sparkles */}
          <motion.div
            animate={iconsAnimation.animate}
            transition={iconsAnimation.transition}
            className='absolute'
            style={{
              top: '20%',
              right: '-10%',
              left: 'auto',
              opacity: 1,
              transform: 'none',
            }}
          >
            <div
              className='w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-yellow-400'
              style={{ transform: 'translateY(-13.801px) rotate(8.31635deg)' }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-sparkles w-8 h-8'
                aria-hidden='true'
              >
                <path d='M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z' />
                <path d='M20 2v4' />
                <path d='M22 4h-4' />
                <circle cx='4' cy='20' r='2' />
              </svg>
            </div>
          </motion.div>

          {/* Floating Icon 2 - Heart */}
          <motion.div
            animate={iconsAnimation.animate}
            transition={iconsAnimation.transition}
            className='absolute'
            style={{
              top: '45%',
              right: 'auto',
              left: '-10%',
              opacity: 1,
              transform: 'none',
            }}
          >
            <div
              className='w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-pink-400'
              style={{
                transform: 'translateY(-0.522874px) rotate(-0.799335deg)',
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-heart w-8 h-8'
                aria-hidden='true'
              >
                <path d='M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5' />
              </svg>
            </div>
          </motion.div>

          {/* Floating Icon 3 - Rocket */}
          <motion.div
            animate={iconsAnimation.animate}
            transition={iconsAnimation.transition}
            className='absolute'
            style={{
              top: '70%',
              right: '-10%',
              left: 'auto',
              opacity: 1,
              transform: 'none',
            }}
          >
            <div
              className='w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-400'
              style={{ transform: 'translateY(-4.99999px) rotate(6.70831deg)' }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-rocket w-8 h-8'
                aria-hidden='true'
              >
                <path d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z' />
                <path d='m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z' />
                <path d='M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0' />
                <path d='M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5' />
              </svg>
            </div>
          </motion.div>

          {/* Mouse Pointer Icon */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className='absolute bottom-8 -left-10 transform -translate-x-1/2'
            style={{ opacity: 1 }}
          >
            <div
              className='w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center pt-2'
              style={{ transform: 'translateY(0.268768px)' }}
            >
              <div className='w-1.5 h-2 bg-purple-400 rounded-full'></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroSection
