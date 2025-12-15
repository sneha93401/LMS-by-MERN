import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
// import assets from "../../assets/assets";
import {Line} from 'rc-progress';
import Footer from "../../components/student/Footer";


function MyEnrollment() {
  const { EnrolledCourses, calculateCourseDuration , navigate } = useContext(AppContext);


  const [progressArray, setProgressArray] = useState([
    { lectureCompleted: 2, totalLectures: 2 },
    { lectureCompleted: 1, totalLectures: 5 },
    { lectureCompleted: 3, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 7 },
    { lectureCompleted: 0, totalLectures: 8 },
    { lectureCompleted: 2, totalLectures: 9 },
    { lectureCompleted: 4, totalLectures: 10 },
    { lectureCompleted: 5, totalLectures: 6 },
    { lectureCompleted: 3, totalLectures: 8 },
    { lectureCompleted: 0, totalLectures: 12 },
    { lectureCompleted: 2, totalLectures: 14 },
    { lectureCompleted: 3, totalLectures: 2 },
  ]);

  return (
    <>
      <div className="md-px-36 px-8 pt-10 bg-slate-900">
        <h1 className="text-2xl font-semibold text-gray-300">My Enrollments</h1>
        <table className="md:table-auto table-fixed w-full overflow-hidden border mt-10">
          <thead className="text-gray-300 border-b border-gray-300 text-sm text-left max-sm:hidden">
            <tr>
              <th className="px-4 py-3 font-semibold truncate">Course</th>
              <th className="px-4 py-3 font-semibold truncate">Duration</th>
              <th className="px-4 py-3 font-semibold truncate">Completed</th>
              <th className="px-4 py-3 font-semibold truncate">status</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {EnrolledCourses.map((course, index) => (
              <tr key={index} className="border-b border-gray-300/20">
                <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3">
                  <img
                    src={course.courseThumbnail}
                    alt=""
                    className="w-14 sm:w-24 md:w-28"
                  />
                  <div className="flex-1">
                    <p className="mb-1 max-sm:text-sm text-gray-300">{course.courseTitle}</p>
                    <Line strokeWidth={2} percent={progressArray[index] ? (progressArray[index].lectureCompleted * 100) / progressArray[index].totalLectures : 0 } className="bg-gray-300  rounded-full"/>
                  </div>
                </td>
                <td className="px-4 py-3 max-sm:hidden text-gray-300">
                  {calculateCourseDuration(course)}
                </td>
                <td className="px-4 py-3 max-sm:hidden text-gray-300">
                  {progressArray[index] &&
                    `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures} `}{" "}
                  <span> Lectures </span>
                </td>
                <td className="px-4 py-3 max-sm:text-right">
                  <button onClick={()=>navigate('/player/' + course._id)}
                    className="px-3 sm:px-5 py-1.5 sm:py-2 bg-emerald-500 hover:bg-emerald-600
              max-sm:text-sm text-white cursor-pointer"
                  >
                    {progressArray[index] &&
                    progressArray[index].lectureCompleted /
                      progressArray[index].totalLectures ===
                      1
                      ? "completed"
                      : "On Going"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
}

export default MyEnrollment;
