import React from 'react'

const SectionOneB = () => {
  return (
    <div className='w-full flex-col items-center justify-center relative'>

      <div className="w-full h-auto relative flex flex-col items-center justify-center">

      <img src="Ellipse 12.png" className='relative bottom-1 md:w-[45%] w-[75%] h-auto'/>
        <img src="Mask group.png" className="absolute md:top-[50%] top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[45%] w-[75%] h-auto"/>
        <div className='w-[80%] px-4 py-6 bg-[#EAF7DB] bottom-[1%] md:bottom-[1%] absolute rounded-[8px]'></div>
      </div>

     <div>
     <div className='className="p-3 md:w-[15%] w-[28%] flex items-center gap-2 rounded-lg border border-[#EFEFF9] absolute bottom-[60%] md:bottom-[65%] left-[7%] md:left-[25%] bg-white shadow-md"'>
          <img src="image 134.svg"/>
          <p className='text-[10px] md:text-[16px]'>Backed by Techstars</p>
        </div>

        <div className='flex flex-row md:w-[20%] w-[24%] gap-x-[8.66px] md:gap-x-[18.66px] p-[10px] rounded-[12.44px] border-[0.78px] border-[#EFEFF9] absolute bottom-[29%] md:bottom-[28%] left-[7%] md:left-[18%] bg-[#FFFFFF]'>
          <div><img src="image 9.svg"/></div>
          <div className='flex flex-col gap-y-[6px]'>
            <img src="Frame 1707478972.png"/>
            <p className='text-[10px] md:text-[16px] text-[#2F2F2F]'><span className='hidden md:flex'>5 star Google</span> rating</p>
          </div>
        </div>

        <div className='rounded-[12.44px] bg-[#FFFFFF] border-[0.78px] border-[rgb(239,239,249)] w-[29%] md:w-[297px] p-[9.66] md:p-[18.66] flex flex-row items-baseline justify-between absolute bottom-[45%] md:bottom-[45%] left-[66%] md:left-[60%]'>

            <div className='w-[297px] flex flex-row items-center gap-x-[9.66px] md:gap-x-[18.66px]'>
              
            <div className='flex flex-col'>
              <p className='text-[10.88px] text-[#5C687D]'>Wallet Balance</p>
              <p className='flex flex-row items-center gap-x-[11.7px] text-[10.88px] md:text-[24.88px] font-bold text-[#141414]'>$ 22,850.00 <img src="Icon.png" className='w-[14px] h-[10px]'/></p>

              <div className='md:flex flex-row hidden '>
              <div className='flex flex-row gap-x-[6.22px] border-[0.78px] rounded-[31.1px] border-[#EFEFF9] px-[12.44px] py-[9.33px] w-fit'>
                  <img src="add.svg"/>
                  <p className='text-[7.88px] md:text-[10.88px]'>Fund Wallet</p>
              </div>

              <div className='flex flex-row gap-x-[6.22px] border-[0.78px] rounded-[31.1px] border-[#EFEFF9] px-[12.44px] py-[9.33px] w-fit'>
                  <img src="export.svg"/>
                  <p className='text-[7.88px] md:text-[10.88px]'>Withdraw</p>
              </div>

              </div>
            </div>

    
            </div>

            <div className='hidden md:flex flex-row items-center gap-x-[4.22px] rounded-[31.1px] py-[3.22px] px-[6.44px] md:py-[6.22px] md:px-[12.44px] bg-[#545358] md:text-[9.33px] text-[5.33px] text-[#FFFFFF]'><img src="dollar-01.png"/> $USD</div>

        </div>
     </div>


    </div>
  )
}

export default SectionOneB
