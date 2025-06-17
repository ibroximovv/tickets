import React from 'react'
import { FilterIcon, SearchIcon } from '../assets/icons/index'
import TicketsTableTopAction from '../components/TicketsTableTopAction'
import TicketTable from '../modules/TicketTable'
import { useNavigate } from 'react-router-dom'

const Tickets = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-white py-[32px] rounded-[8px] border-[1px] border-[#DFE0EB]'>
      <div className='pb-[48px] px-[32px] flex justify-between items-center'>
        <h2 className='font-bold text-[19px] text-[#252733]'>All tickets</h2>
        <div className='flex items-center gap-[32px]'>
          <TicketsTableTopAction title={'Sort'} type={'sort'}/>
          <TicketsTableTopAction title={'Filter'}/>
          <button onClick={() => navigate('create')} className='text-white font-semibold text-[14px] w-[90px] rounded-[20px] p-2 bg-[#252733] cursor-pointer'>Add</button>
        </div>
      </div>
      <TicketTable />
    </div>
  )
}

export default Tickets