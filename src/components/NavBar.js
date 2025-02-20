import React from 'react'

function NavBar() {
  return (
    <div className="navbar bg-white">
      <div className="flex-1">
        <img className="btn btn-ghost"
          alt="Tailwind CSS Navbar component"
          src="/smean_logo.svg"/>
        <a className="btn btn-ghost text-xl">ស្មៀន/Smean</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="/SOMETH.jpg"/>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar;