import React from 'react'
import { Link } from 'react-router-dom'
import { LogoIcon } from '../assets/icons'
import { NavList } from '../hooks/useRoutes'
import NavItem from '../components/NavItem'

const Navbar = () => {
  return (
    <div className='w-[22%] bg-[#363740] h-[100vh] overflow-y-auto'>
        <div className='pt-[41px] pl-[32px] pb-[59px]'>
            <Link className='flex items-center gap-3 ' to={'/'}>
                <LogoIcon />
                <span className='font-bold text-[19px] text-[#A4A6B3] leading-[0.4px]'>Dashboard Kit</span>
            </Link>
        </div>
        <nav className='flex flex-col'>
            {NavList.map(item => <NavItem key={item.id} item={item}/>)}
        </nav>
    </div>
  )
}

export default Navbar