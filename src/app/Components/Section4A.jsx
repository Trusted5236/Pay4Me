import React from 'react'
import { AiOutlineThunderbolt } from "react-icons/ai";


const Section4A = () => {
  return (
    <div  style={{
        backgroundImage: "url('/Group 1370.png'), url('/Group 1371.png')",
        backgroundSize: "contain",
        backgroundPosition: "left center, right center",
        backgroundRepeat: "no-repeat, no-repeat",
        width: "auto, auto",
        height: "auto, auto"
      }} className='bg-[#0E0E0E] p-[2rem] flex flex-col gap-y[40px] md:gap-y-[80px]'>
      
        <div className='flex flex-col items-center justify-center gap-y-[32px]'>
                <p className='text-[10px] bg-[#F5FDEC] flex flex-row items-center rounded-[16px] gap-x-[10px] px-[16px] py-[8px]'><AiOutlineThunderbolt /> what we offer</p>
                <h1 className='md:text-[48px] text-[24px] font-bold text-white text-center'>Simplified Payments for Your <br />Relocation Dreams</h1>
        </div>

        <div className='w-full flex flex-row items-center justify-between'>
        <div className='w-[45%]'>
        
        <div  className='bg-[#FFFBE4] rounded-[24px] md:p-[40px] p-[20px]'>

            <div  className='flex flex-col items-start gap-y-[20px]'>
                <img src="Frame (2).png" className='md:w-[48px] w-[25px]'/>
                <h1  className='font-bold text-[12px] md:text-[24px]'>Super fast tuition and
                school fees payments</h1>
                <p className=' text-[10px] md:text-[16px] text-[#7D7D7D]'>Seamlessly pay local and international educational expenses using our fast and convenient online payments platform from the comfort of your home.</p>
            </div>

            <div className='flex flex-row items-center gap-x-[2rem] gap-y-[2rem]'>
                <div  className='flex flex-col gap-y-[2rem] items-center'>
                <img src="image 4.png" className='w-[5rem] md:w-[10rem]'/>
                <img src="image (3).png" className='w-[5rem] md:w-[10rem]'/>
                </div>
                
               <div className='flex flex-col gap-y-[2rem] items-center'>
               <img src="image (4).png" className='w-[2.5rem] md:w-[5rem]'/>
               <img src="image 130.png" className='w-[3rem] md:w-[6rem]'/></div>  
            </div>
            <div className=' flex flex-col items-end justify-end'>
                <img src='/Group 1370 (1).png'/>
                </div>
    </div>
        </div>


        <div className='w-[45%]'>
        
        <div  className='bg-[#E7F8FF] rounded-[24px] md:p-[40px] p-[20px]'>

            <div  className='flex flex-col items-start gap-y-[20px]'>
                <img src="Frame (3).png" className='md:w-[48px] w-[25px]'/>
                <h1  className='font-bold text-[12px] md:text-[24px]'>Pay for SEVIS, WES, Visa Applications & Mores</h1>
                <p className=' text-[10px] md:text-[16px] text-[#7D7D7D]'>We help you get closer to your study abroad and
                        relocation goals faster by promptly completing
                        your payment orders for credential evaluation,
                        immigration, and visa purposes.</p>
            </div>

            <div className='flex flex-row items-center gap-x-[2rem] gap-y-[2rem]'>
                <div  className='flex flex-col gap-y-[2rem] items-center'>
                <img src="image (5).png" className='w-[5rem] md:w-[10rem]'/>
                <img src="/image 3.png" className='w-[5rem] md:w-[10rem]'/>
                </div>
                
               <div className='flex flex-col gap-y-[2rem] items-center'>
               <img src="image (6).png" className='w-[2.5rem] md:w-[5rem]'/>
               </div>  
            </div>
            <div className=' flex flex-col items-end justify-end'>
                <img src='/Group 1370 (2).png'/>
                </div>
    </div>
        </div>
        </div>

</div>
  )
}

export default Section4A
