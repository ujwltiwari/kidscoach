import React from 'react'
import { motion } from 'motion/react'
const Testimonials = () => {
  return (
    <div>
      <section
        id='testimonials'
        className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'
      >
        {/* Background blobs */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <div
            className='absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl'
            style={{ transform: 'rotate(321.684deg)' }}
          />
          <div
            className='absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl'
            style={{ transform: 'rotate(-224.301deg)' }}
          />
        </div>

        <div className='max-w-7xl mx-auto relative z-10'>
          {/* Header */}
          <div className='text-center mb-16'>
            <motion.span
              animate={{ scale: [-1, 1], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
              className='inline-block px-6 py-3 bg-gradient-to-r from-yellow-200 to-orange-200 text-orange-700 rounded-full mb-6'
            >
              💬 What Parents Say 💬
            </motion.span>

            <h2 className='text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
              Happy Parents, Happy Kids!
            </h2>

            <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
              Don't just take our word for it. Hear from the families who've
              seen incredible transformations!
            </p>
          </div>

          {/* Desktop testimonials */}
          <div className='hidden md:grid md:grid-cols-2 gap-8 mb-8'>
            {[
              {
                text: "KidsCoach has been amazing! Sophie's confidence in math has skyrocketed, and she actually looks forward to her sessions.",
                name: 'Emma Wilson',
                sub: 'Parent of Sophie, 8',
                img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
                gradient: 'from-pink-400 to-pink-600',
              },
              {
                text: "My son struggled with reading, but after just 3 months with KidsCoach, he's reading above grade level!",
                name: 'James Thompson',
                sub: 'Parent of Lucas, 10',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
                gradient: 'from-blue-400 to-blue-600',
              },
              {
                text: "The creative arts program unleashed Mia's artistic talents. Her creativity has flourished!",
                name: 'Lisa Rodriguez',
                sub: 'Parent of Mia, 7',
                img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
                gradient: 'from-purple-400 to-purple-600',
              },
              {
                text: 'The coding program is excellent! Ethan has built his own games and apps.',
                name: 'Robert Chang',
                sub: 'Parent of Ethan, 12',
                img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
                gradient: 'from-green-400 to-green-600',
              },
            ].map((t, i) => (
              <motion.div
                whileHover={{
                  y: -20,
                  transition: {
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                }}
                key={i}
                className='group'
              >
                <div className='bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full'>
                  <div
                    className={`absolute top-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br ${t.gradient} opacity-10 flex items-center justify-center`}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      className='w-8 h-8'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z' />
                      <path d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z' />
                    </svg>
                  </div>

                  {/* Stars */}
                  <div className='flex gap-1 mb-4'>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg
                        key={s}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        className='w-5 h-5 text-yellow-400 fill-yellow-400'
                        fill='currentColor'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z' />
                      </svg>
                    ))}
                  </div>

                  <p className='text-gray-700 mb-6 italic'>“{t.text}”</p>

                  <div className='flex items-center gap-4'>
                    <img
                      src={t.img}
                      alt={t.name}
                      className='w-14 h-14 rounded-full object-cover border-2 border-purple-200'
                    />
                    <div>
                      <div className='text-gray-900'>{t.name}</div>
                      <div className='text-sm text-gray-600'>{t.sub}</div>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile single testimonial */}
          <div className='md:hidden bg-white rounded-3xl p-8 shadow-lg'>
            <p className='text-gray-700 italic mb-6'>
              “KidsCoach has been amazing! Sophie's confidence in math has
              skyrocketed, and she actually looks forward to her sessions.”
            </p>

            <div className='flex items-center gap-4'>
              <img
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
                alt='Emma Wilson'
                className='w-14 h-14 rounded-full object-cover border-2 border-purple-200'
              />
              <div>
                <div className='text-gray-900'>Emma Wilson</div>
                <div className='text-sm text-gray-600'>Parent of Sophie, 8</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
