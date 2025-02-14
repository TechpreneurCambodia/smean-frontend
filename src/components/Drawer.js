import React from 'react'

function Drawer() {
  return (
    <aside className="w-64 bg-gray-100 p-4 min-h-screen">
    <nav>
      <ul>
        <li className="p-2 hover:bg-gray-200 rounded">ទំព័រដើម</li>
        <li className="p-2 hover:bg-gray-200 rounded">ប្រវត្តិ</li>
        <li className="p-2 hover:bg-gray-200 rounded">ការកំណត់</li>
      </ul>
    </nav>
  </aside>
  )
}

export default Drawer