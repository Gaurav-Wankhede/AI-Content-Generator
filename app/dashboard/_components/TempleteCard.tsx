import React from 'react'
import { TEMPLETE } from './TempleteListSection'
import IMAGE  from 'next/image'
import Link from 'next/link'

function TempleteCard(item:TEMPLETE) {
  return (
    <Link href={'/dashboard/content/'+item?.slug} className="block w-full">
      <div className='h-full p-3 md:p-4 lg:p-5 shadow-md border bg-white flex flex-col gap-2 md:gap-3 cursor-pointer hover:scale-105 transition-all rounded-lg'>
        <IMAGE 
          src={item.icon} 
          alt='icon' 
          width={40} 
          height={40} 
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" 
        />
        <h2 className='font-medium text-sm sm:text-base md:text-lg'>{item.name}</h2>
        <p className='text-gray-500 text-xs sm:text-sm md:text-base line-clamp-2 md:line-clamp-3'>{item.desc}</p>
      </div>
    </Link>
  )
}

export default TempleteCard