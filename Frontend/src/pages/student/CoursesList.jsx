import React, { useContext, useEffect, useState } from "react";
import { AppContext, AppContextProvider } from "../../context/AppContext";
import SearchBar from "../../components/student/SearchBar";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/student/CourseCard";
import Footer from "../../components/student/Footer";
import assets from "../../assets/assets";

function CoursesList() {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourse, SetfilteredCourse] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();

      input
        ? SetfilteredCourse(
            tempCourses.filter((item) =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : SetfilteredCourse(tempCourses);
    }
  }, [allCourses, input]);
  return (
    <>
      <div className="bg-slate-900 relative md:px-16 px-8 pt-20 text-left">
        <div className="flex md:flex-row flex-col gap-7 items-start justify-between w-full pb-5">
          <div>
            <h1 className="text-4xl font-semibold text-gray-300">
              Course List
            </h1>
            <p className="text-gray-300">
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </span>
              /<span className="text-gray-300">Course List</span>
            </p>
          </div>
          <SearchBar data={input} />
        </div>
        {input && (
          <div
            className="inline-flex items-center gap-4 px-4 py-8 
                      border mt-8 mb-8 text-gray-300"
          >
            <p className="text-gray-300">{input}</p>
            <img
              src={assets.cross_icon}
              alt=""
              className="cursor-pointer"
              onClick={() => navigate("/course-list")}
            />
          </div>
        )}

        <div
          className="grid grid-cols-1 m:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
           gap-3 px-2 md:p-0 text-gray-300"
        >
          {filteredCourse.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CoursesList;
