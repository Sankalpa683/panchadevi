import React from 'react'
import { Phone, Clock, MapPin } from 'lucide-react'

const topnav = () => {
    return (
        <div className='p-[8px] z-50 hidden md:flex md:text-md  w-full sticky top-0 font-light bg-[#b7f27a] text-black  justify-center items-center'>
            <div className='flex gap-[14px]'>
                <div className='flex space-x-2 items-center'>
                    <Phone className='w-4 h-4' />
                    <p>+977 9704607031</p>
                </div>
                <div className='flex space-x-2 items-center'>
                    <Clock className='w-4 h-4'/>
                    <p>9.30AM - 6.30pm</p>
                </div>
                <div className='flex space-x-2 items-center'>
                    <MapPin className='w-4 h-4'/>
                    <p>Province No. 1</p>
                </div>
            </div>
        </div>
    )
}

export default topnav