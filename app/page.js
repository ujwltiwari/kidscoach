'use client'
import React from 'react'
import HeroSection from './components/HeroSection'

import { Button } from '@heroui/react'
import WhyChooseUs from './components/WhyChooseUs'
import Navbar from './components/Navbar'
const Page = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#EFF5FF]'>
        <HeroSection />
        <WhyChooseUs />
      </div>
    </>
  )
}

export default Page
