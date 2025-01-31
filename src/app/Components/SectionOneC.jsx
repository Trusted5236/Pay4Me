import React from 'react'

const SectionOneC = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center py-[2rem]'>
      <div>
        <p className='text-[#848484] text-[16px]'>Leading Brands Partner with us</p>
      </div>

      <div style={{ overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none" }} className='flex flex-row items-center justify-between w-full'>
        <img src="1.webp.jpg" className='w-[9rem] rounded-[4px]'/>
        <img src="2.webp.jpg" className='w-[9rem] rounded-[4px]'/>
        <img src="3.webp.jpg" className='w-[9rem] rounded-[4px]'/>
        <img src="4.webp.jpg" className='w-[9rem] rounded-[4px]'/>
        <img src="5.webp.png" className='w-[9rem] rounded-[4px]'/>
        <img src="6.webp.png" className='w-[9rem] rounded-[4px]'/>
      </div>
    </div>
  )
}

export default SectionOneC
