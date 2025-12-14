import React from 'react'
import assets from '../../assets/assets'
import SearchBar from './SearchBar'

function Hero() {
  return (
    <div className='flex flex-col items-center w-full pt-16 md:pt-13 px-7 md:px-0 
    space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>

      {/* Responsive Heading */}
      <h1
        className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold 
        text-gray-600 relative max-w-4xl mx-auto leading-snug'
      >
        Empower your future with the courses designed to
        <span className='text-cyan-950'> fit your choice.</span>

        <img
          src={assets.sketch}
          alt='sketch'
          className='hidden md:block absolute -bottom-7 right-0'
        />
      </h1>

      {/* Responsive Paragraph */}
      <p className='hidden md:block text-base md:text-lg text-gray-500 max-w-2xl mx-auto'>
        We bring together world-class instructors, interactive content,
        and a supportive community to help you achieve your personal and professional goals.
      </p>

      <p className='md:hidden text-sm text-gray-500 max-w-2xl mx-auto'>
        We bring together world-class instructors, interactive content,
        and a supportive community to help you achieve your personal and professional goals.
      </p>
      <SearchBar/>
    </div>
  )
}

export default Hero
