"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TempleteListSection from './_components/TempleteListSection'

const Dashboard = () => {
  const [userSearchInput, setUserSearchInput]=useState<string>()
  return (
    <div>
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />
      <TempleteListSection userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard