import React from 'react'
import { FaBook } from 'react-icons/fa'

function Header() {
  return (
    <header className="flex items-center p-4 bg-white shadow-md">
    <FaBook className="text-xl text-black" />
    <h1 className="ml-2 text-lg font-semibold text-primary">ស្មៀន / Smean</h1>
  </header>
  )
}

export default Header