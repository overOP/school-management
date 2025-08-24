import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalender'
import React from 'react'

const Parent = () => {
  return (
    <div className='flex-1 p-4 flex gap-4 flex-col xl:flex-row'>
      {/* left */}
      <div className='w-full xl:w-2/3'>
      <div className='h-full dark:bg-[#171616] p-4 rounded-md'>
        <h1 className='text-xl font-semibold'>Schedule (roshani chaudhary)</h1>
        <BigCalendar />
      </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
      <Announcements />
      </div>
    </div>
  )
}

export default Parent