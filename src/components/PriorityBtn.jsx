import React from 'react'

const PriorityBtn = ({id}) => {
  return (
    <button className={`py-[5px] uppercase ${id == 0 ? 'bg-[#F12B2C]': (id == 1 ? 'bg-[#FEC400]' : 'bg-[#29CC97]')} px-[12px] text-[11px] font-bold text-[#FFFFFF] rounded-[100px]`}>
        {id == 0 ? 'high' : (id == 1 ? 'low' : 'normal')}
    </button>
  )
}

export default PriorityBtn