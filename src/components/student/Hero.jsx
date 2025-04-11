import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradiant-to-b from-cyan-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Empowering minds, one lesson at a time.
      <span className='text-blue-600'> Where learning meets limitless potential.</span><img src={assets.sketch} alt="sketch" 
      className='md:block hidden absolute -bottom-7 right-0' /></h1>
      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Unlock your true potential through engaging courses, expert educators, and personalized learning paths.
      Start your journey today and shape the future you dream of.</p>

      <p className='md:hidden text-grey-500 max-w-sm mx-auto'>We bring together world-class instructors to help you achieve your professional goals</p>
      <SearchBar />
    </div>
  )
}

export default Hero
