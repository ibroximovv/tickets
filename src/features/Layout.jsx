import React from 'react'
import Navbar from '../modules/Navbar'
import Header from '../modules/Header'
import PageRoute from '../routes'

const Layout = () => {
  return (
    <div className='flex justify-between'>
      <Navbar />
      <div className='w-[78%] h-[100vh] overflow-y-auto p-[30px]'>
        <Header />
        <PageRoute />
      </div>
    </div>
  )
}

export default Layout