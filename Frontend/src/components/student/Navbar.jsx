// import React, { useContext } from "react";
// import assets from "../../assets/assets.js";
// import { Link } from "react-router-dom";
// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
// import { AppContext } from "../../context/AppContext.jsx";

// function Navbar() {

//   const {navigate, isEducator} = useContext(AppContext)
//   const isCourseListPage = location.pathname.includes("/courses-list");

//   const { openSignIn } = useClerk();
//   const { user } = useUser();

//   return (
//     <>
//       <div
//         className={`flex items-center justify-between px-4 sm:px-10 md:px-14
//       lg:px-32 border-b border-gray-500 py-4 ${
//         isCourseListPage ? "bg-white" : "bg-cyan-100/70"
//       }`}
//       >
//         <img onClick={()=>navigate('/')}
//           src={assets.logo}
//           alt=" logo"
//           className="w-28 lg:w-32 cursor-pointer"
//         />
//         <div className="hidden md:flex items-center gap-5 text-gray-500 ">
//           <div className="flex items-center gap-5">
//             {user &&
//               <>
//                 <button onClick={()=> {navigate('/educator')}}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>|
//                 <Link to="/my-enrollment"> My Enrollment </Link>
//               </>
//             }
//           </div>
//           {user ? (
//             <UserButton />
//           ) : (
//             <button
//               onClick={openSignIn}
//               className=" bg-blue-600 text-white px-5 py-2 rounded-full"
//             >
//               Create Account
//             </button>
//           )}
//         </div>
//         {/* for phone screen  */}
//         <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
//           <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
//             {user &&
//               <>
//                 <button onClick={()=> {navigate('/educator')}}>
//                 {isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>|
//                 <Link to="/my-enrollment"> My Enrollment </Link>
//               </>
//             }
//           </div>
//           {
//             user ?  <UserButton /> :
//             <button onClick={openSignIn}> <img src={assets.user_icon} alt="" />{" "} </button>
//           }

//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

import React, { useContext } from "react";
import assets from "../../assets/assets.js";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext.jsx";

function Navbar() {
  const { navigate, isEducator } = useContext(AppContext);
  const isCourseListPage = location.pathname.includes("/courses-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <>
      <div
        className={`flex items-center justify-between px-4 sm:px-10 md:px-14 
        lg:px-32 border-b border-slate-700 py-4 ${
          isCourseListPage
            ? "bg-slate-900"
            : "bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900"
        }`}
      >

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-white">LearnHub</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5 text-gray-300">
          <div className="flex items-center gap-5">
            {user && (
              <>
                <button
                  className="hover:text-emerald-400 transition-colors"
                  onClick={() => {
                    navigate("/educator");
                  }}
                >
                  {isEducator ? "Educator Dashboard" : "Become Educator"}
                </button>
                |
                <Link
                  to="/my-enrollment"
                  className="hover:text-emerald-400 transition-colors"
                >
                  My Enrollment
                </Link>
              </>
            )}
          </div>

          {user ? (
            <UserButton />
          ) : (
            <button
              onClick={openSignIn}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full transition-colors"
            >
              Create Account
            </button>
          )}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-300">
          <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
            {user && (
              <>
                <button
                  className="hover:text-emerald-400 transition-colors"
                  onClick={() => {
                    navigate("/educator");
                  }}
                >
                  {isEducator ? "Educator Dashboard" : "Become Educator"}
                </button>
                |
                <Link
                  to="/my-enrollment"
                  className="hover:text-emerald-400 transition-colors"
                >
                  My Enrollment
                </Link>
              </>
            )}
          </div>

          {user ? (
            <UserButton />
          ) : (
            <button onClick={openSignIn}>
              <img src={assets.user_icon} alt="" className="opacity-80" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
