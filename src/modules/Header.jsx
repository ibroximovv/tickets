import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NavList } from '../hooks/useRoutes'
import { NotificationIcon, SearchIcon } from '../assets/icons'
import AvatarIcon from '../assets/images/avatar.svg'

const Header = () => {
  const { pathname } = useLocation()
  const [ showInput, setShowInput ] = useState(false)
  function handleBlur(e) {
    setTimeout(() => {
      setShowInput(false)
      e.target.value = null
    }, 2000)
  }
  return (
    <header className='flex items-center justify-between mb-[58px]'>
      <strong className='font-bold text-[24px] text-[#252733]'>{NavList.find(item => item.path == pathname)?.title}</strong>
      <div className='flex items-center gap-[32px]'>
        <div className='flex items-center gap-6'>
          <div className='flex items-center'>
            <button className={`${showInput ? 'hidden' : ''} cursor-pointer`} onClick={() => setShowInput(true)}><SearchIcon /></button>
            <input onBlur={handleBlur} className={`border-[1px] duration-400 rounded-2xl outline-none ${showInput ? 'focus:shadow-sm shadow-blue-400 py-1 pl-2 border-slate-200 w-[190px]' : 'w-0 border-transparent'}`} placeholder='Searching...' type="text" />
          </div>
          <button><NotificationIcon /></button>
        </div>
        <span className='w-[1px] h-[32px] inline-block bg-[#DFE0EB]'></span>
        <div className='flex items-center gap-6'>
          <p className='text-[#252733] font-semibold text-[14px] '>Jones Ferdinand</p>
          <img className='w-[44px] h-[44px]' src={AvatarIcon} alt="Avatar Icon" width={44} height={44} />
        </div>
      </div>
    </header>
  )
}

export default Header