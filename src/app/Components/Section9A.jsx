import React from 'react'

const Section9A = () => {
  return (
    <div style={{
        backgroundImage: "url('/Group 1369 (1).png')",
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        width: "auto",
        height: "auto"
      }} className='bg-[#EDF5E2] w-full p-[2rem] flex flex-row flex-wrap items-center gap-y-[1rem] gap-x-[60px] md:gap-x-[120px] justify-center md:justify-between'>

      <div className='md:w-[535px] md:h-[290px] w-[267.5px] h-[145px] flex flex-col md:gap-y-[38px] gap-y-[19px]'>
        <h1 className='text-[24px] md:text-[48px] font-bold'>Download the Pay4Me App Today!</h1>
        <p className='text-[8px] md:text-[16px] text-[#7D7D7D]'>Our custom QR code will take you to your app store
        to download our awesome native apps</p>
        <div className='flex flex-row md:gap-x-[16px] gap-x-[8px] items-center'>
            <img src="Link.png" className='md:w-[158px] md:h-[56px] w-[79px] h-[28px]'/>
            <img src="Link (1).png" className='md:w-[158px] md:h-[56px] w-[79px] h-[28px]'/>
        </div>
      </div>

      <div>
            <img src="pay4me_qrcode_rounded.svg (1).png"  className='md:w-[396.5px] md:h-[396.5px] w-[198.25px] h-[198.25px]'/>
      </div>
    </div>
  )
}

export default Section9A
