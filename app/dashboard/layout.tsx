import React from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';

function layout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='flex flex-col md:flex-row min-h-screen bg-gray-50'>
      <div className='md:w-60 flex-shrink-0'>
        <SideNav />
      </div>
      <div className='flex-grow'>
        <Header />
        <main className='mt-1 md:mt-2'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default layout