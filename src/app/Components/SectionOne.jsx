import React from 'react'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";


const SectionOne = () => {
  return (
    <div className='w-full flex flex-col items-center gap-y-[16px] md:gap-y-[32px] pt-[20px] px-[2rem]'>

      <div className='bg-[#E9F8D8] py-[4px] px-[8px] flex flex-row gap-x-[6px] items-center justify-center rounded-[32px] w-fit'>
      <AiOutlineThunderbolt className='w-[14px] h-[14px]'/>
      <p className='uppercase text-[10px]'>Secure. Global. fast</p>
      </div>

      <div>
        <h1 style={{textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)"}} className='md:text-[64px] text-[32px] text-center font-bold text-[#2F2F2F]'>
            Reliable Payment Solutions for International Education
        </h1>

        <p className='md:text-[16px] text-[10px] text-center text-[#666565]'>The easiest and fastest way to pay tuition and fees to educational institutions, businesses,<br/> and government agencies worldwide.</p>
      </div>

      <div className='w-fit flex flex-row md:gap-x-[24px] gap-x-[12px]'>
        <button className='w-[134px] md:w-[248px] flex items-center text-[10px] md:text-[18px] md:px-[32px] md:py-[16px] px-[16px] py-[6px] bg-[#AFE274] text-[#242323] rounded-[33px] flex-row gap-x-[2px] md:gap-x-[4px] '>Download app <BiLogoPlayStore className='w-[10px] h-[20px] md:w-[20px] md:h-[20px]'/>|<FaApple  className='w-[10px] h-[20px] md:w-[20px] md:h-[20px]'/></button>

        <button className='w-[134px] md:w-[248px] flex items-center text-[10px] md:text-[18px] md:px-[32px] md:py-[16px] px-[16px] py-[6px] bg-[#F4F8EF] border-[#AFE274] border-[1px] rounded-[33px] gap-x-[6px] md:gap-x-[12px]'>Watch Demo <FaRegCirclePlay className='w-[10px] h-[20px] md:w-[20px] md:h-[20px]'/></button>
      </div>

        <div className='flex flex-row items-center md:gap-x-[30px] gap-x-[10px]'>
            <div className='flex items-center  flex-row space-x-[-12px] md:space-x-[-8px] md:w-[104px] '>
            <img src="Ellipse 376.svg"/>
            <img src="Ellipse 377.svg"/>
            <img src="Ellipse 378.svg"/>
            <img src="Ellipse 379.svg"/>
            </div>

            <p className='text-[10px] md:text-[16px] text-[#666565]'>Trusted by 3k+ Students Globally</p>
        </div>
    </div>
  )
}

export default SectionOne
