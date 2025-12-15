import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

function CoursesSection() {

  const { allCourses } = useContext(AppContext)

  return (
    <div className='py-8 md:px-16 px-8 w-full bg-slate-900'>
      
      <h2 className='text-5xl font-medium text-emerald-400'>
        Learn from the best
      </h2>

      <p className='text-sm md:text-base text-gray-300 mt-3'>
        Discover our top-rated courses across various categories. From coding and design <br />
        to business and wellness, our courses are crafted to deliver results.
      </p>

      {/* Responsive Grid */}
      <div
        className='grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        px-4 md:my-16 my-10 gap-6 text-white'
      >
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link
        to={'/course-list'}
        onClick={() => scrollTo(0, 0)}
        className='text-emerald-400 border border-emerald-400/40 px-10 py-3 rounded-2xl hover:text-emerald-300 hover:border-emerald-300/60 transition-colors'
      >
        Show All Courses
      </Link>

    </div>
  )
}

export default CoursesSection
