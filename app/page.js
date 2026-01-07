'use client'
import React from 'react'
import HeroSection from './components/HeroSection'

import { Button } from '@heroui/react'
import WhyChooseUs from './components/WhyChooseUs'
import Navbar from './components/Navbar'
import Explore from './components/Explore'
import OurTeam from './components/OurTeam'
import Testimonials from './components/Testimonials'
import { Contact } from 'lucide-react'
import Footer from './components/Footer'
const Page = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#EFF5FF]'>
        <HeroSection />
        <WhyChooseUs />
        <Explore />
        <OurTeam />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Page
