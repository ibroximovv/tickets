import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({item}) => {
    return (
        <NavLink className={`py-5 flex relative items-center gap-[24px] text-[#A4A6B3] pl-[32px]`} to={item.path}>
            {item.icon}
            <span>{item.title}</span>
        </NavLink>
    )
}

export default NavItem