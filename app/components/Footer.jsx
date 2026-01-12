import { Star } from 'lucide-react'
import React from 'react'
import { motion } from 'motion/react'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const Footer = () => {
  return (
    <div>
      <footer className='bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white relative overflow-hidden'>
        {/* Floating icons */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-20'>
          {[
            {
              left: '65.1527%',
              top: '82.363%',
              y: -16.72,
              r: 298,
              type: 'star',
            },
            {
              left: '12.6935%',
              top: '99.7125%',
              y: -9.09,
              r: 56,
              type: 'heart',
            },
            {
              left: '26.1745%',
              top: '12.7725%',
              y: -1.34,
              r: 355,
              type: 'star',
            },
            {
              left: '15.5489%',
              top: '33.2237%',
              y: -20.9,
              r: 281,
              type: 'heart',
            },
            { left: '82.014%', top: '3.01122%', y: 0, r: 360, type: 'star' },
            {
              left: '14.5394%',
              top: '36.4089%',
              y: -14.85,
              r: 305,
              type: 'heart',
            },
            {
              left: '21.4905%',
              top: '30.1901%',
              y: -29.52,
              r: 227,
              type: 'star',
            },
            {
              left: '34.8499%',
              top: '99.0381%',
              y: -24.04,
              r: 164,
              type: 'heart',
            },
            { left: '64.818%', top: '67.423%', y: -1.88, r: 353, type: 'star' },
            {
              left: '89.542%',
              top: '19.5937%',
              y: -1.38,
              r: 355,
              type: 'heart',
            },
            {
              left: '89.6462%',
              top: '96.7079%',
              y: -16.65,
              r: 107,
              type: 'star',
            },
            {
              left: '6.28126%',
              top: '75.2711%',
              y: -29.62,
              r: 229,
              type: 'heart',
            },
            {
              left: '13.7112%',
              top: '60.2397%',
              y: -15.77,
              r: 101,
              type: 'star',
            },
            {
              left: '8.57274%',
              top: '11.3809%',
              y: -26.28,
              r: 185,
              type: 'heart',
            },
            {
              left: '93.3941%',
              top: '51.373%',
              y: -20.27,
              r: 133,
              type: 'star',
            },
          ].map((i, idx) => (
            <div
              key={idx}
              className='absolute'
              style={{
                left: i.left,
                top: i.top,
                transform: `translateY(${i.y}px) rotate(${i.r}deg)`,
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='w-6 h-6 fill-white'
                fill='currentColor'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                {i.type === 'star' ? (
                  <path d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z' />
                ) : (
                  <path d='M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5' />
                )}
              </svg>
            </div>
          ))}
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10'>
          {/* Top grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12'>
            <div className='lg:col-span-2'>
              <div className='flex items-center gap-2 mb-4'>
                <div
                  className='gap-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center'
                  style={{
                    animation: 'spin 3s linear infinite',
                  }}
                >
                  <Star className='w-7 h-7 text-white fill-white' />
                </div>
                <span className='text-3xl font-semibold text-white bg-clip-text'>
                  KidsCoach
                </span>
              </div>

              <p className='text-purple-200 mb-6 max-w-sm'>
                Empowering children to reach their full potential through
                engaging, personalized coaching programs.
              </p>

              <div className='flex gap-3'>
                {['facebook', 'instagram', 'twitter', 'youtube'].map((s, i) => (
                  <a
                    key={i}
                    href='#'
                    className='w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all'
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {[
              {
                title: 'Programs',
                links: [
                  'Reading & Writing',
                  'Math Mastery',
                  'Creative Arts',
                  'Music & Rhythm',
                  'Science Explorer',
                  'Coding Kids',
                ],
              },
              {
                title: 'Company',
                links: [
                  'About Us',
                  'Our Coaches',
                  'Testimonials',
                  'Blog',
                  'Careers',
                ],
              },
              {
                title: 'Support',
                links: [
                  'Contact Us',
                  'FAQ',
                  'Privacy Policy',
                  'Terms of Service',
                ],
              },
            ].map((col, i) => (
              <div key={i}>
                <h4 className='text-xl mb-4'>{col.title}</h4>
                <motion.ul
                  variants={containerVariants}
                  initial='hidden'
                  whileInView='visible'
                  className='space-y-2'
                >
                  {col.links.map((l, idx) => (
                    <motion.li
                      variants={itemVariants}
                      key={idx}
                      className='hover:text-yellow-500 hover:translate-x-2 transition-transform duration-300'
                    >
                      <a
                        href='#'
                        className='text-purple-200 hover:text-yellow-400 transition-colors inline-block'
                      >
                        {l}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12'>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div>
                <h4 className='text-2xl mb-2'>Join Our Newsletter! 📬</h4>
                <p className='text-purple-200'>
                  Get tips, updates, and special offers for your child&apos;s
                  learning journey.
                </p>
              </div>

              <div className='flex gap-3'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-6 py-3 rounded-full bg-white/90 text-gray-900 outline-none'
                />
                <button className='px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className='pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-purple-200 text-center md:text-left'>
              © 2025 KidsCoach. All rights reserved. Made with ❤️ for kids
              everywhere.
            </p>

            <div className='flex gap-6 text-purple-200'>
              <a href='#' className='hover:text-yellow-400 transition-colors'>
                Privacy
              </a>
              <a href='#' className='hover:text-yellow-400 transition-colors'>
                Terms
              </a>
              <a href='#' className='hover:text-yellow-400 transition-colors'>
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
