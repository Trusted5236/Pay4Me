import React from 'react'
import { AiOutlineThunderbolt } from "react-icons/ai";

const Section6A = () => {
  return (
   <div className='flex w-full flex-col gap-y-[2rem]'>
     <div className='flex flex-row justify-between items-center pl-[2rem]'>

<div className='flex flex-col items-start justify-start pt-[1rem] gap-y-[32px]'>
                <p className='text-[10px] bg-[#F5FDEC] flex flex-row items-center rounded-[16px] gap-x-[10px] px-[16px] py-[8px]'><AiOutlineThunderbolt />Testimonials</p>
                <h1 className='md:text-[48px] text-[20px] font-bold text-[#2F2F2F]text-center'>Don’t take our words for it,<br /> Take theirs.</h1>
        </div>
      
      <div className=' flex flex-col items-end justify-start '>
        <img src='/Group 1371 (1).png' className='w-[200.12px] h-[130.32px] md:w-[400.24px] md:h-[300.64px]'/>
        </div>
    </div>

    <div style={{ overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none" }} className='flex flex-row items-center justify-between gap-x-[36px] px-[2rem]'>
        <img src="Component 25.png" className='w-[173.5px] h-[187.5px] md:w-[347px] md:h-[375px]'/>
        <img src="Component 24.png" className='w-[173.5px] h-[187.5px] md:w-[347px] md:h-[375px]'/>
        <img src="Component 26.png" className='w-[173.5px] h-[187.5px] md:w-[347px] md:h-[375px]'/>
        <img src="Component 27 (1).png" className='w-[173.5px] h-[187.5px] md:w-[347px] md:h-[375px]'/>
    </div>


   </div>
  )
}

export default Section6A
