import React from 'react'
import { FilterIcon, SortIcon } from '../assets/icons'

const TicketsTableTopAction = ({title, type}) => {
  return (
    <button className='flex items-center gap-[8px]'>{type == 'sort' ? <SortIcon /> : <FilterIcon /> }<span className='font-semibold text-[14px]'>{title}</span></button>
  )
}

export default TicketsTableTopAction