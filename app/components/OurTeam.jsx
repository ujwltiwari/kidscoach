import React from 'react'
import { motion } from 'motion/react'

const OurTeam = () => {
  return (
    <div>
      <section
        id='coaches'
        className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-purple-50/50 to-pink-50/50'
      >
        {/* Floating icons */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          {[
            { left: '54.7384%', top: '57.9512%', y: -4.79, type: 'star' },
            { left: '58.8099%', top: '18.7133%', y: -24.36, type: 'heart' },
            { left: '15.2565%', top: '53.8123%', y: -2.82, type: 'star' },
            { left: '34.4997%', top: '30.6281%', y: -5.88, type: 'heart' },
            { left: '26.5191%', top: '66.6247%', y: -5.93, type: 'star' },
            { left: '84.3674%', top: '92.9438%', y: -7.77, type: 'heart' },
          ].map((item, i) => (
            <div
              key={i}
              className='absolute'
              style={{
                left: item.left,
                top: item.top,
                transform: `translateY(${item.y}px)`,
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className={`w-6 h-6 ${
                  item.type === 'star' ? 'text-yellow-400' : 'text-pink-400'
                }`}
              >
                {item.type === 'star' ? (
                  <path d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z' />
                ) : (
                  <path d='M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5' />
                )}
              </svg>
            </div>
          ))}
        </div>

        <div className='max-w-7xl mx-auto relative z-10'>
          {/* Header */}
          <div className='text-center mb-16'>
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: {
                  duration: 0.5,
                },
              }}
              className='inline-block px-6 py-3 bg-gradient-to-r from-purple-200 to-pink-200 text-purple-700 rounded-full mb-6'
            >
              ⭐ Meet Our Team ⭐
            </motion.div>

            <h2 className='text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
              Our Amazing Coaches
            </h2>

            <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
              Passionate experts who make learning an adventure.
            </p>
          </div>

          {/* Coaches */}
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                name: 'Sarah Johnson',
                role: 'Math & Science Coach',
                exp: '8 years',
                quote: 'Making numbers fun!',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
                gradient: 'from-blue-400 to-purple-500',
              },
              {
                name: 'Michael Chen',
                role: 'Creative Arts Coach',
                exp: '6 years',
                quote: 'Unleashing creativity',
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
                gradient: 'from-pink-400 to-orange-500',
              },
              {
                name: 'Emily Davis',
                role: 'Reading & Writing Coach',
                exp: '10 years',
                quote: 'Building literacy skills',
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
                gradient: 'from-purple-400 to-pink-500',
              },
              {
                name: 'David Martinez',
                role: 'Coding & Technology',
                exp: '7 years',
                quote: 'Future tech leaders',
                img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
                gradient: 'from-green-400 to-blue-500',
              },
            ].map((coach, i) => (
              <motion.div
                whileHover={{
                  scale: 1.08,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                  },
                }}
                key={i}
                className='group'
              >
                <div className='relative z-1 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500'>
                  {/* rotating star */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: 'easeInOut',
                    }}
                    className='z-10 absolute right-4 top-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg'
                  >
                    <div>
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
                        className='lucide lucide-star w-6 h-6 text-yellow-500 fill-yellow-500'
                        aria-hidden='true'
                      >
                        <path d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z'></path>
                      </svg>
                    </div>
                  </motion.div>
                  <div className='relative h-64'>
                    <img
                      src={coach.img}
                      alt={coach.name}
                      className='w-full h-full object-cover'
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${coach.gradient} opacity-30`}
                    />
                  </div>

                  <div className='p-6'>
                    <h3 className='text-2xl text-gray-900 mb-2'>
                      {coach.name}
                    </h3>
                    <p
                      className={`bg-gradient-to-r ${coach.gradient} bg-clip-text text-transparent mb-2`}
                    >
                      {coach.role}
                    </p>
                    <span className='px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm'>
                      {coach.exp}
                    </span>
                    <p className='text-gray-600 italic mt-2'>“{coach.quote}”</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className='text-center mt-16 group relative'>
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: '0 20px 40px -10px rgba(168, 85, 247, 0.4)', // bottom glow
              }}
              className='px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg transition-all duration-300'
            >
              Meet All Our Coaches →
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurTeam
