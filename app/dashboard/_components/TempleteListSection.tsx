import React, { useEffect, useState } from 'react'
import Templetes from '@/app/(data)/Templetes'
import TempleteCard from './TempleteCard'

export interface TEMPLETE {
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[]
}

export interface FORM {
    label:string,
    field:string,
    name:string,
    required?:boolean
}

function TempleteListSection({userSearchInput}:any) {

    const [templeteList, setTempleteList]=useState(Templetes)
    useEffect(()=>{
        if(userSearchInput)
        {
            const filterData = Templetes.filter(item=>
                item.name.toLowerCase().includes(userSearchInput.toLowerCase())
            );
            setTempleteList(filterData);
        }
        else{
            setTempleteList(Templetes);
        }
    }, [userSearchInput])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-6 lg:p-8'>
      {templeteList.length > 0 ? (
        templeteList.map((item:TEMPLETE, index:number)=> (
          <TempleteCard key={index} {...item} />
        ))
      ) : (
        <div className="col-span-full text-center py-10 text-gray-500">
          No templates found matching your search.
        </div>
      )}
    </div>
  )
}

export default TempleteListSection