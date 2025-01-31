import React from 'react'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";


const Section7A = () => {
  return (
    <div className='w-full h-auto p-[2rem] flex flex-col gap-y-[2rem]'>
      <div className='flex flex-col items-start justify-start pt-[1rem] gap-y-[20px]'>
                      <p className='text-[10px] bg-[#F5FDEC] flex flex-row items-center rounded-[16px] gap-x-[10px] px-[16px] py-[8px]'><AiOutlineThunderbolt />FAQS</p>
                      <h1 className='md:text-[48px] text-[20px] font-bold text-[#2F2F2F]text-center'>Got Questions?</h1>
                      <p className='md:text-[24px] text-[12px] text-[#7D7D7D]text-center'>We’ve got answers</p>
            </div>

            <div className='flex flex-row w-full items-center justify-between'>
                <div className='hidden md:flex'>
                    <img src="portrait-young-latin-man-using-his-mobile-phone-while-standing-outdoors-street 3.png" className='rounded-[24px] md:w-[436px] md:h-[493px] w-[218px] h-[246.5px]'/>
                </div>

                <div className='border-[0.5px] border-[#D8D8D8] bg-[#FCFCFC] p-[40px] flex flex-col gap-y-[24px] md:gap-y-[48px] rounded-[24px] w-full md:w-[60%]'>
                    <h1 className='flex flex-row items-center justify-between md:text-[20px] text-[12px] border-b-[1px] border-[#D8D8D8]'>What is the Pay4Me App? <IoIosAdd /></h1>
                    <h1 className='flex flex-row items-center justify-between md:text-[20px] text-[12px] border-b-[1px] border-[#D8D8D8]'>What is the payment processing timeline on the Pay4Me App? <IoIosAdd /></h1>
                    <h1 className='flex flex-row items-center justify-between md:text-[20px] text-[12px] border-b-[1px] border-[#D8D8D8]'>How does the Pay4Me App work? <IoIosAdd /></h1>
                    <h1 className='flex flex-row items-center justify-between md:text-[20px] text-[12px] border-b-[1px] border-[#D8D8D8]'>How do I get started using the Pay4Me App? <IoIosAdd /></h1>
                </div>
            </div>
    </div>
  )
}

export default Section7A
