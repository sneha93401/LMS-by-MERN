import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FilePlusCorner,
  BookMarked,
  UserStar,
} from "lucide-react";

function SideBar() {
  const { isEducator } = useContext(AppContext);

  const menuItems = [
    { name: "Dashboard", path: "/educator", icon: LayoutDashboard },
    { name: "Add Course", path: "/educator/add-course", icon: FilePlusCorner },
    { name: "My Course", path: "/educator/my-courses", icon: BookMarked },
    { name: "Student Enrolled", path: "/educator/student-enrolled", icon: UserStar },
  ];

  return (
    isEducator && (
      <div className="md:w-64 w-16 min-h-screen border-r border-gray-600 bg-slate-900 py-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/educator"}
              className={({ isActive }) =>
                `
                group flex items-center gap-4 px-4 py-3 my-1
                transition-all duration-300
                ${
                  isActive
                    ? "bg-slate-700 border-l-4 border-emerald-400 text-white "
                    : "text-gray-400 hover:bg-slate-800 hover:text-white"
                }
                `
              }
            >
              <Icon
                className={`
                  w-6 h-6 transition-colors duration-300
                  ${
                    window.location.pathname === item.path
                      ? "text-emerald-400"
                      : "group-hover:text-white"
                  }
                `}
              />
              <span className="md:block hidden font-medium">
                {item.name}
              </span>
            </NavLink>
          );
        })}
      </div>
    )
  );
}

export default SideBar;
