import React from 'react'
import { AiOutlineThunderbolt } from "react-icons/ai";
import Images from './Images';

const Section8A = () => {
  return (
    <div className='p-[2rem] w-full flex flex-col gap-y-[40px] md:gap-y-[80px]'>
      <div className='flex flex-col items-center justify-center gap-y-[32px]'>
                      <p className='text-[10px] bg-[#F5FDEC] flex flex-row items-center rounded-[16px] gap-x-[10px] px-[16px] py-[8px]'><AiOutlineThunderbolt />BLOG</p>
                      <h1 className='md:text-[48px] text-[24px] font-bold text-center'>Latest Blog & Resources</h1>
              </div>

        <div>
            <Images/>
        </div>

        <div className='flex flex-row items-center justify-center gap-x-[1rem]'>
            <img src="Frame 1000002908.png" className='w-[24.97px] md:w-[49.94px] h-[24.97px] md:h-[49.94px]'/>
            <img src="Frame 1000002907.png" className='w-[24.97px] md:w-[49.94px] h-[24.97px] md:h-[49.94px]'/>
        </div>
    </div>
  )
}

export default Section8A
