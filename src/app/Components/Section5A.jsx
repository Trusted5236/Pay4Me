import React from 'react'

const Section5A = () => {
  return (
    <div style={{
        backgroundImage: "url('/Video demo (1).png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "auto",
        height: "auto"
      }} className='flex flex-col gap-y-[175px] md:gap-y-[350px] p-[2rem]'>

        <div>
            <h1 className='font-bold text-[24px] md:text-[40px] text-white'>Why We Built the Pay4Me App</h1>
        </div>

        <div>
            <img src="image 131.png" className='md:w-[70px] md:h-[52px] w-[35px] h-[26px]'/>
            <p className='text-[12px] md:text-[20px] text-white'> Pay4Me Team</p>
        </div>
      
    </div>
  )
}

export default Section5A
