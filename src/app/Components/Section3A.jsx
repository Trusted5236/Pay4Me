import React from 'react'
import { AiOutlineThunderbolt } from "react-icons/ai";
import CardComponent from './CardComponent';
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

const Section3A = () => {
  return (
    <div className='flex flex-col items-center justify-center
    py-[2rem]'>

      <div className='flex flex-col items-center justify-center gap-y-[32px]'>
        <p className='text-[10px] bg-[#AFE274] flex flex-row items-center rounded-[16px] gap-x-[10px] px-[16px] py-[8px]'><AiOutlineThunderbolt /> How it works</p>
        <h1 className='md:text-[48px] text-[24px] font-bold'>4 Simple Steps to Get Started</h1>
      </div>

      <div>
        <CardComponent/>
      </div>
    
        <div>
        <button className='w-[134px] md:w-[248px] flex items-center text-[10px] md:text-[18px] md:px-[32px] md:py-[16px] px-[16px] py-[6px] bg-[#AFE274] text-[#242323] rounded-[33px] flex-row gap-x-[2px] md:gap-x-[4px] '>Download app <BiLogoPlayStore className='w-[10px] h-[20px] md:w-[20px] md:h-[20px]'/>|<FaApple  className='w-[10px] h-[20px] md:w-[20px] md:h-[20px]'/></button>
        </div>
    </div>
  )
}

export default Section3A
