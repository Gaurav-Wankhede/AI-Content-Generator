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
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
        {templeteList.map((item:TEMPLETE, index:number)=> (
            <TempleteCard {...item} />
        ))}
    </div>
  )
}

export default TempleteListSection