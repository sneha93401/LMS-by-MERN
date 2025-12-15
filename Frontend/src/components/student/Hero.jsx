// import React from 'react'
// import assets from '../../assets/assets'
// import SearchBar from './SearchBar'

// function Hero() {
//   return (
//     <div className='flex flex-col items-center w-full pt-16 md:pt-13 px-7 md:px-0 
//     space-y-7 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900'>

//       {/* Responsive Heading */}
//       <h1
//         className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold 
//         text-white relative max-w-4xl mx-auto leading-snug'
//       >
//         Empower your future with the courses designed to
//         <span className='text-emerald-400'> fit your choice.</span>

//         <img
//           src={assets.sketch}
//           alt='sketch'
//           className='hidden md:block absolute -bottom-7 right-0 opacity-80'
//         />
//       </h1>

//       {/* Responsive Paragraph */}
//       <p className='hidden md:block text-base md:text-lg text-gray-300 max-w-2xl mx-auto'>
//         We bring together world-class instructors, interactive content,
//         and a supportive community to help you achieve your personal and professional goals.
//       </p>

//       <p className='md:hidden text-sm text-gray-400 max-w-2xl mx-auto'>
//         We bring together world-class instructors, interactive content,
//         and a supportive community to help you achieve your personal and professional goals.
//       </p>

//       {/* <SearchBar/> */}
//     </div>
//   )
// }

// export default Hero

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full min-h-screen bg-slate-900 flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">
            Master Your Skills
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-white">Transform Your</span>
          <br />
          <span className="text-emerald-400">Career Journey</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Unlock your potential with world-class courses designed by industry experts. Learn at your own pace and build the skills that matter in today's digital world.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105">
            Explore Courses
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-transparent border-2 border-slate-600 hover:border-emerald-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-slate-800">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
