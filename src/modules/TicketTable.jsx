import React from 'react'
import AvatarIcon from '../assets/images/avatar.svg'
import PriorityBtn from '../components/PriorityBtn'
import { MoreIcon } from '../assets/icons'

const TicketTable = () => {
    return (
        <table className='w-full'>
            <thead>
                <tr className='font-bold text-[#9FA2B4] text-[14px]'>
                    <th className='text-start pb-[11px] border-b-[1.5px] border-[#DFE0EB] pl-[32px]'>Ticket details</th>
                    <th className='text-start pb-[11px] border-b-[1.5px] border-[#DFE0EB]'>Customer name</th>
                    <th className='text-start pb-[11px] border-b-[1.5px] border-[#DFE0EB]'>Date</th>
                    <th className='text-start pb-[11px] border-b-[1.5px] border-[#DFE0EB] pr-[32px]'>Priority</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='pl-[32px] py-[24px] border-b-[1.5px] border-[#DFE0EB]'>
                        <div className='flex items-center gap-[24px]'>
                            <img className='w-[44px] h-[44px]' src={AvatarIcon} alt="Avatar Icon" width={44} height={44} />
                            <div>
                                <p className='text-[#252733] text-[14px] font-semibold'>Contact Email not Linked</p>
                                <span className='text-[#C5C7CD] text-[12px] font-normal'>Updated 1 day ago</span>
                            </div>
                        </div>
                    </td>
                    <td className='py-[24px] border-b-[1.5px] border-[#DFE0EB]'>
                        <strong className='font-semibold text-[14px] text-[#252733]'>Tom Cruise</strong>
                        <p className='text-[#C5C7CD] font-normal text-[12px]'>on 24.05.2019</p>
                    </td>
                    <td className='py-[24px] border-b-[1.5px] border-[#DFE0EB]'>
                        <strong className='font-semibold text-[14px] text-[#252733]'>May 26, 2019</strong>
                        <p className='text-[#C5C7CD] font-normal text-[12px]'>6:30 PM</p>
                    </td>
                    <td className='py-[24px] pr-[32px] border-b-[1.5px] border-[#DFE0EB]'>
                        <div className='flex items-center justify-between'>
                            <PriorityBtn id={23} />
                            <MoreIcon />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TicketTable