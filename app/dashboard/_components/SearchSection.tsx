import React from 'react'
import { Search } from 'lucide-react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white'>
        <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-center'>Browse All Templete</h2>
        <p className='text-sm sm:text-base mt-2 text-center'>What would you like to create today?</p>
        <div className='w-full flex justify-center items-center'>
            <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-3 sm:my-4 md:my-5 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%]'>
                <Search className='text-primary w-4 h-4 sm:w-5 sm:h-5' />
                <input 
                    type='text' 
                    placeholder='Search' 
                    onChange={(event)=>onSearchInput(event.target.value)} 
                    className='bg-transparent outline-none text-black w-full text-sm sm:text-base'
                />
            </div>
        </div>
    </div>
  )
}

export default SearchSection