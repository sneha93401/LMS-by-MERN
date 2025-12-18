// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../../context/AppContext'
// import Loading from '../../components/student/Loading'

// function MyCourses() {
//   const {currency , allCourses} = useContext(AppContext)

//   const [courses , setCourses] = useState(null)

//   const fetchEducatorCourses = async () =>{
//     setCourses(allCourses)
//   }
//   useEffect(()=>{
//     fetchEducatorCourses()
//   }, [])
//   return courses ? (
//     <div className='h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
//      <div className='w-full'>
//       <h1 className='pb-4 text-lg font-medium text-gray-300'>My Courses</h1>
//       <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden 
//       rounded-md bg-slate-800 border border-gray-500/20
//       '>
//         <table className='md:table-auto table-fixed w-full overflow-hidden'>
//           <thead className='text-gray-300 border-b border-gray-500/20 text-sm text-left'>
//           <tr>
//             <th className='px-4 py-3 font-semibold truncate'>All Courses</th>
//             <th className='px-4 py-3 font-semibold truncate'>Earning</th>
//             <th className='px-4 py-3 font-semibold truncate'>Students</th>
//             <th className='px-4 py-3 font-semibold truncate'>Published on</th>
//           </tr>

//           </thead>
//         </table>
//       </div>
//      </div>

//     </div>
//   ):
//   <Loading/>
// }

// export default MyCourses


import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'

function MyCourses() {
  const { currency, allCourses } = useContext(AppContext)

  const [courses, setCourses] = useState(null)

  const fetchEducatorCourses = async () => {
    setCourses(allCourses)
  }

useEffect(() => {
  // console.log('allCourses from context:', allCourses)
  fetchEducatorCourses()
}, [allCourses])
  return courses ? (
    <div className="h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="w-full">
        <h1 className="pb-4 text-lg font-medium text-gray-300">My Courses</h1>

        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-slate-800 border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-300 border-b border-gray-500/20 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">All Courses</th>
                <th className="px-4 py-3 font-semibold truncate">Earning</th>
                <th className="px-4 py-3 font-semibold truncate">Students</th>
                <th className="px-4 py-3 font-semibold truncate">Published On</th>
              </tr>
            </thead>

            {/* code from image starts here */}
            <tbody className="text-sm text-gray-500">
              {courses.map((course) => (
                <tr
                  key={course._id}
                  className="border-b border-gray-500/20"
                >
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <img
                      src={course.courseThumbnail}
                      alt="Course Image"
                      className="w-16"
                    />
                    <span className="truncate text-gray-300 hidden md:block">
                      {course.courseTitle}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-gray-300">
                    {currency}{' '}
                    {Math.floor(
                      course.enrolledStudents.length *
                        (course.coursePrice - course.discount * course.coursePrice / 100)
                    )}
                  </td>

                  <td className="px-4 py-3 text-gray-300">
                    {course.enrolledStudents.length}
                  </td>

                  <td className="px-4 py-3 text-gray-300">
                    {new Date(course.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  )
}

export default MyCourses
