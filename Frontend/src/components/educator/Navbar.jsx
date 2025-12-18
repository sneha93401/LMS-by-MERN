import React from 'react';
import { Link } from 'react-router-dom';
import assets, { dummyEducatorData } from '../../assets/assets';
import { UserButton, useUser } from '@clerk/clerk-react';

function Navbar() {
  const educatorData = dummyEducatorData;
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-400 py-3">
      <Link to="/">
        <div className="flex items-center gap-2 cursor-pointer">
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
      </Link>

      <div className="flex items-center gap-5 text-gray-300 relative">
        <p>Hi! {user ? user.fullName : 'Developer'}</p>

        {user ? (
          <UserButton />
        ) : (
          <img className="max-w-8" src={assets.profile_img} alt="profile" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
