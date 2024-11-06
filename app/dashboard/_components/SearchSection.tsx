import React from 'react'
import { Search } from 'lucide-react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='px-3 py-6 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white'>
        <h2 className='text-lg sm:text-2xl md:text-3xl font-bold text-center px-2'>Browse All Templete</h2>
        <p className='text-xs sm:text-sm md:text-base mt-2 text-center px-2'>What would you like to create today?</p>
        <div className='w-full flex justify-center items-center px-3 sm:px-4'>
            <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-3 sm:my-4 md:my-5 w-full sm:w-[80%] md:w-[70%] lg:w-[50%]'>
                <Search className='text-primary w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0' />
                <input 
                    type='text' 
                    placeholder='Search templates...' 
                    onChange={(event)=>onSearchInput(event.target.value)} 
                    className='bg-transparent outline-none text-black w-full text-sm sm:text-base'
                />
            </div>
        </div>
    </div>
  )
}

export default SearchSection