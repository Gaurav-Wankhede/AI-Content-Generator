import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='sticky top-0 z-20 p-3 sm:p-4 md:p-5 shadow-sm bg-white border-b-2 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4'>
      <div className='flex gap-2 items-center p-2 border rounded-md w-full sm:max-w-lg bg-white'>
        <Search className='w-4 h-4 sm:w-5 sm:h-5 text-gray-500'/>
        <input 
          type='text' 
          placeholder='Search...'
          className='outline-none w-full text-sm sm:text-base'
        />
      </div>
      <div className='w-full sm:w-auto'>
        <h2 className='bg-primary p-2 rounded-full text-xs sm:text-sm text-white px-3 sm:px-4 text-center whitespace-nowrap'>
          🔥Join Member just for $9.99/Month
        </h2>
      </div>
    </div>
  )
}

export default Header