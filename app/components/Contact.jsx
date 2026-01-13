import React from 'react'
import {motion} from "motion/react"
const Contact = () => {
  return (
    <div>
      <section
        id='contact'
        className='py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'
      >
        {/* Floating gradients */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          {[
            {
              bg: 'rgba(147, 51, 234, 0.125)',
              left: '39.0375%',
              top: '76.3982%',
              y: -39.26,
              scale: 1.157,
            },
            {
              bg: 'rgba(236, 72, 153, 0.125)',
              left: '29.4574%',
              top: '24.8764%',
              y: -22.13,
              scale: 1.088,
            },
            {
              bg: 'rgba(249, 115, 22, 0.125)',
              left: '14.9054%',
              top: '80.2874%',
              y: -12.99,
              scale: 1.052,
            },
            {
              bg: 'rgba(147, 51, 234, 0.125)',
              left: '33.6866%',
              top: '72.8012%',
              y: -3.81,
              scale: 1.015,
            },
            {
              bg: 'rgba(236, 72, 153, 0.125)',
              left: '46.9489%',
              top: '65.6411%',
              y: -37.56,
              scale: 1.15,
            },
            {
              bg: 'rgba(249, 115, 22, 0.125)',
              left: '99.4905%',
              top: '81.7888%',
              y: -45.06,
              scale: 1.18,
            },
            {
              bg: 'rgba(147, 51, 234, 0.125)',
              left: '19.3549%',
              top: '36.1755%',
              y: -13.28,
              scale: 1.053,
            },
            {
              bg: 'rgba(236, 72, 153, 0.125)',
              left: '73.6988%',
              top: '63.6336%',
              y: -0.34,
              scale: 1.001,
            },
          ].map((item, i) => (
            <div
              key={i}
              className='absolute w-32 h-32 rounded-full'
              style={{
                background: `radial-gradient(circle, ${item.bg} 0%, transparent 70%)`,
                left: item.left,
                top: item.top,
                transform: `translateY(${item.y}px) scale(${item.scale})`,
              }}
            />
          ))}
        </div>

        <div className='max-w-7xl mx-auto relative z-10'>
          {/* Header */}
          <div className='text-center mb-16'>
            <span className='inline-block px-6 py-3 bg-gradient-to-r from-purple-200 to-pink-200 text-purple-700 rounded-full mb-6'>
              📧 Get In Touch 📧
            </span>

            <h2 className='text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
              Let's Start Your Child's Journey!
            </h2>

            <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
              Ready to unlock your child's potential? Reach out to us and let's
              create a personalized learning plan together!
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Form */}
            <div>
              <div className='bg-white rounded-3xl p-8 shadow-xl'>
                <h3 className='text-2xl text-gray-900 mb-6'>
                  Send us a message
                </h3>

                <form className='space-y-6'>
                  <div>
                    <label className='block text-gray-700 mb-2'>
                      Parent&apos;s Name
                    </label>
                    <input
                      type='text'
                      className='w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 outline-none transition-colors'
                      placeholder='John Doe'
                      required
                    />
                  </div>

                  <div>
                    <label className='block text-gray-700 mb-2'>Email</label>
                    <input
                      type='email'
                      className='w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 outline-none transition-colors'
                      placeholder='john@example.com'
                      required
                    />
                  </div>

                  <div>
                    <label className='block text-gray-700 mb-2'>Phone</label>
                    <input
                      type='tel'
                      className='w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 outline-none transition-colors'
                      placeholder='+1 (555) 123-4567'
                      required
                    />
                  </div>

                  <div>
                    <label className='block text-gray-700 mb-2'>
                      Child&apos;s Age
                    </label>
                    <input
                      type='number'
                      className='w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 outline-none transition-colors'
                      placeholder='8'
                      required
                    />
                  </div>

                  <div>
                    <label className='block text-gray-700 mb-2'>
                      Interested Program
                    </label>
                    <select
                      className='w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 outline-none transition-colors'
                      required
                    >
                      <option value=''>Select a program</option>
                      <option value='reading'>Reading & Writing</option>
                      <option value='math'>Math Mastery</option>
                      <option value='arts'>Creative Arts</option>
                      <option value='music'>Music & Rhythm</option>
                      <option value='science'>Science Explorer</option>
                      <option value='coding'>Coding Kids</option>
                    </select>
                  </div>

                  <div>
                    <label className='block text-gray-700 mb-2'>Message</label>
                    <textarea
                      className='w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 outline-none transition-colors resize-none'
                      rows={4}
                      placeholder="Tell us about your child and what you're looking for..."
                      required
                    />
                  </div>

                  <button
                    type='submit'
                    className='w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg flex items-center justify-center gap-2'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      className='w-5 h-5'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z' />
                      <path d='m21.854 2.147-10.94 10.939' />
                    </svg>
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact info */}
            <div className='space-y-8'>
              {[
                {
                  title: 'Call Us',
                  value: '+1 (555) 123-4567',
                  gradient: 'from-blue-400 to-blue-600',
                  icon: (
                    <path d='M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384' />
                  ),
                },
                {
                  title: 'Email Us',
                  value: 'hello@kidscoach.com',
                  gradient: 'from-purple-400 to-purple-600',
                  icon: (
                    <>
                      <path d='m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7' />
                      <rect x='2' y='4' width='20' height='16' rx='2' />
                    </>
                  ),
                },
                {
                  title: 'Visit Us',
                  value: '123 Learning Lane, Kids City',
                  gradient: 'from-pink-400 to-pink-600',
                  icon: (
                    <>
                      <path d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0' />
                      <circle cx='12' cy='10' r='3' />
                    </>
                  ),
                },
              ].map((item, i) => (
                <motion.div
                  // whileHover={{ x: 15 }}
                  key={i}
                  className='bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-6'
                >
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 0.4,
                      ease: 'linear',
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      {item.icon}
                    </svg>
                  </motion.div>

                  <div>
                    <h4 className='text-gray-900 mb-1'>{item.title}</h4>
                    <p className='text-gray-600'>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
