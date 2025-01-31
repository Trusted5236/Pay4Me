import React from 'react'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LuScanLine } from "react-icons/lu";

const Section2A = () => {
  return (
    <div style={{
        backgroundImage: "url('/Group 1369 (1).png')",
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        width: "auto",
        height: "auto"
      }} className='bg-[#E7FBCF] flex p-[2rem] flex-col gap-y-[30px] md:gap-y-[60px]'>

        <div className='flex flex-col  gap-y-[16px] md:gap-y-[32px]'>
        <div className='flex flex-row items-center text-[10px] gap-x-[10px] px-[16px] py-[8px] bg-[#AFE274] rounded-[16px] w-fit text-[#2F2F2F]'>
            <p><AiOutlineThunderbolt /></p>
            <h1 className='uppercase '>Features</h1>
        </div>

        <div>
            <h1 className='text-[24px] font-bold md:text-[48px] text-[#2F2F2F]'>What Truly sets us apart</h1>
        </div>
        </div>

        <div className='w-full flex flex-row items-center flex-wrap justify-between gap-y-[1rem]'>
        <div className='p-[16px] md:p-[32px] flex flex-col gap-y-[24px] md:gap-y-[30px] w-[45%] md:w-[30%] bg-[#FFFFFF] rounded-[24px]'>
            <img src="Frame (1).png" className='md:w-[48px] w-[25px]'/>
            <h1 className='font-bold text-[15px] md:text-[22px]'>Global Accessibility</h1>
            <p className='text-[10px] md:text-[14px]'>Effortlessly send tuition and other payments to educational institutions worldwide, no matter where you are.</p>
            <button className='flex flex-row items-center px-[8px] md:px-[16px] py-[6px] md:py-[12px] rounded-[33px] gap-x-[6px] md:gap-x-[12px] bg-[#AFE274] border-[1px] border-[#A4C47D] w-[100px] md:w-[140px]  text-[10px] md:text-[12px]'>Dowload app <LuScanLine /></button>
        </div>

        <div className='p-[16px] md:p-[32px] flex flex-col gap-y-[24px] md:gap-y-[30px] w-[45%] md:w-[30%] bg-[#FFFFFF] rounded-[24px]'>
            <img src="Vector (1).png" className='md:w-[20px] w-[15px]'/>
            <h1 className='font-bold text-[15px] md:text-[22px]'>Fast & Reliable Transactions</h1>
            <p className='text-[10px] md:text-[14px]'>Ensure your payments are processed quickly, helping you meet important deadlines without stress.</p>
            <button className='flex flex-row items-center px-[8px] md:px-[16px] py-[6px] md:py-[12px] rounded-[33px] gap-x-[6px] md:gap-x-[12px] bg-[#AFE274] border-[1px] border-[#A4C47D] w-[100px] md:w-[140px]  text-[10px] md:text-[12px]'>Dowload app <LuScanLine /></button>
        </div>

        <div className='p-[16px] md:p-[32px] flex flex-col gap-y-[24px] md:gap-y-[30px] w-[45%] md:w-[30%] bg-[#FFFFFF] rounded-[24px]'>
            <img src="Frame.png" className='md:w-[48px] w-[25px]'/>
            <h1 className='font-bold text-[15px] md:text-[22px]'>Secure & Transparent</h1>
            <p className='text-[10px] md:text-[14px]'>Enjoy peace of mind with secure payment processing and complete transparency on fees and conversion rates.</p>
            <button className='flex flex-row items-center px-[8px] md:px-[16px] py-[6px] md:py-[12px] rounded-[33px] gap-x-[6px] md:gap-x-[12px] bg-[#AFE274] border-[1px] border-[#A4C47D] w-[100px] md:w-[140px]  text-[10px] md:text-[12px]'>Dowload app <LuScanLine /></button>
        </div>



        </div>
    
        
    </div>
  )
}

export default Section2A
