import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link';
const Footer1 = () => {
  return (
    <div className='p-[2rem] w-full h-auto flex flex-row items-start flex-wrap justify-between gap-y-[1rem] border-b-[0.5px] border-[#D8D8D8]'>

      <div className='flex flex-col md:gap-y-[18px] gap-y-[9px] items-start text-[0.8rem] md:text-[1rem] w-fit'>
      <img src="/Component 1 (2).png"/>
      <p className='text-[#5D5D5D] flex flex-row items-center gap-x-[0.5rem] '><MdOutlineMailOutline className='border-[0.5px] rounded-full text-[1.8rem] p-[0.5rem]'/> support@pay4me.app</p>
        <div className=' flex flex-row items-center gap-x-[0.5rem]'>
        <FaInstagram className='bg-black rounded-full text-white md:text-[1.8rem] text-[1.6rem] p-[0.35rem] md:p-[0.5rem]'/>
        <FaXTwitter className='bg-black rounded-full text-white text-[1.6rem] p-[0.35rem] md:p-[0.5rem]'/>
        <FaFacebookF className='bg-black rounded-full text-white text-[1.6rem] p-[0.35rem] md:p-[0.5rem]'/>
        <FaTiktok className='bg-black rounded-full text-white text-[1.6rem] p-[0.35rem] md:p-[0.5rem]'/>
        <FaYoutube className='bg-black rounded-full text-white text-[1.6rem] p-[0.35rem] md:p-[0.5rem]'/>
        </div>
      </div>

      <div className='text-[0.8rem] md:text-[1rem] flex flex-col md:gap-y-[18px] gap-y-[9px] items-start w-fit'>
        <h1 className='font-bold'>Company</h1>
        <Link href={""}><p>About</p></Link>
        <Link href={""}><p>Blog</p></Link>
        <Link href={""}><p>How it Works</p></Link>
        <Link href={""}><p>Careers</p></Link>
      </div>

      <div className='text-[0.8rem] md:text-[1rem] flex flex-col md:gap-y-[18px] gap-y-[9px] items-start w-fit'>
        <h1 className='font-bold'>Resources</h1>
        <Link href={""}><p>Andriod Reviews</p></Link>
        <Link href={""}><p>iOS Reviews</p></Link>
        <Link href={""}><p>Testimonials</p></Link>
        <Link href={""}><p>FAQs</p></Link>
      </div>

      <div className='text-[0.8rem] md:text-[1rem] flex flex-col md:gap-y-[18px] gap-y-[9px] items-start w-fit'>
        <h1 className='font-bold'>Legal</h1>
        <Link href={""}><p>Terms of Service</p></Link>
        <Link href={""}><p>Terms of Service</p></Link>
        <Link href={""}><p>Privacy Policy</p></Link>
        <Link href={""}><p>KYC/AML Policy</p></Link>
      </div>

      <div className='w-[142px] h-[auto] md:w-[224px] md:h-[auto] flex flex-col md:gap-y-[18px] gap-y-[9px] items-start'>
      <div className='flex flex-row md:gap-x-[16px] gap-x-[8px] items-center'>
            <img src="Link.png" className=' w-[79px] h-[28px]'/>
            <img src="Link (1).png" className='w-[79px] h-[28px]'/>
        </div>

        <p className='text-[0.8rem] md:text-[1rem] text-[#5D5D5D] w-fit'>Depending on your mobile device, download our awesome native app to start enjoying all the benefits of pay4Me.</p>
      </div>

    </div>
  )
}

export default Footer1
