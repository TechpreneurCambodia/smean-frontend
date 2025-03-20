import { useUser } from '@/hooks/UserContext';
import React, { use, useEffect } from 'react';
import { useState } from "react";

function NavBar({ isSidebarOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user, fetchUserInfo } = useUser();
  useEffect(() => {
    fetchUserInfo();
  }, []);
  return (
    <div className="navbar pl-[32px] bg-white m-x-[20px] w-full sticky">
      <div
        className={`flex-1 flex items-center gap-5 ${isSidebarOpen ? 'pl-64' : 'pl-0'
          } transition-padding duration-300 ease-in-out`}
      >
        <a href="/home">
          <img
            className="h-[48px] max-w-full "
            alt="Tailwind CSS Navbar component"
            src="/smean_logo_03.png"

          />

        </a>
        {/* <a className="font-semibold text-xl cursor-pointer" href="/home">ស្មៀន/Smean</a> */}
      </div>
      <div className="flex-none gap-2 ">
        <div className="dropdown dropdown-end w-full">
          <div className="relative flex items-center justify-end">
            {/* Main Content (Visible on larger screens, or when mobile menu is open) */}
            <div className={`absolute sm:static top-12 right-0 bg-white sm:bg-transparent sm:flex flex-col sm:flex-row items-start  sm:items-center gap-6 sm:gap-6 p-2 mt-4 sm:mr-4 sm:p-0 shadow-lg sm:shadow-none sm:z-10 z-20 ${isOpen ? "flex" : "hidden"}`}>
              <div tabIndex={0} role="button" className=" avatar ">

                {/* Profile Icon */}
                <div tabIndex={0} role="button" className="avatar">
                  <div className="h-[48px] rounded-full border hover:shadow-lg">
                    <img alt="user profile icon" src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} />
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;