import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='flex space-x-4 items-center justify-between shadow p-3 font-semibold'>
        <ul>
          <li>
            <a href="">Moritz Petersen</a>
          </li>
        </ul>
        <ul  className='flex space-x-4 items-center text-gray-600 font-normal' >
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">Benifits</a>
          </li>
          <li>
            <a href="">Process</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
       
          
        </ul>
        <ul>
        <button className='h-9 px-3 rounded text-indigo-600 font-normal'>
          Project Request 
          </button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
