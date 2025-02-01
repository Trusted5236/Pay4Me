"use client"
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';




const Navbar = () => {

    const pathName = usePathname()
    const [active, setActive] = useState(false)
    const menuRef = useRef(null)

    const handleNav =(e)=>{
        setActive(!active)
    }

    useGSAP(() => {
        if (active) {
            gsap.to(menuRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            });
        } else {
            gsap.to(menuRef.current, {
                x: "100%",
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
            });
        }
    }, [active]); 

    useEffect(() => {
        gsap.set(menuRef.current, {
            x: "100%",
            opacity: 0,
        });
    }, [active]);

  return (
    <div>
        <div className='bg-[#242323] w-full flex items-center py-[1rem] px-[2rem] justify-between md:pl-[16px] md:pr-[8px] md:pt-[8px] md:pb-[8px] rounded-[44px]'>
        <div>
            <img src="/Component 1.png"/>
        </div>

        <ul className='text-[#F6F6F6] text-[16px] hidden md:flex py-[12px] px-[32px] flex-row gap-x-[33px]'>
            <Link href={"/"}><li className={pathName === "/" ? "border-b-2 border-[#80BC39]" : ""}>Home</li></Link>
            <Link href={"/"}><li >About</li></Link>
            <Link href={"/"}><li>Blog</li></Link>
            <Link href={"/"}><li>Support</li></Link>
        </ul>

        <div className='hidden md:flex'>
            <img src="/Frame 1707479040.png" alt="" />
        </div>

        <div className='md:hidden flex '>
        <MdMenu className='text-white bg-[#80BC39] text-[25px] p-1 ' onClick={handleNav}/>
        </div>
    </div>

    { active && (<div className='md:hidden flex'> 
    
    <ul className='text-[#F6F6F6] text-[16px] py-[12px] px-[32px] bg-[#242323]  flex-col gap-y-8 flex gap-x-[33px] absolute w-[50%] right-0 h-[100vh] top-[8px] overflow-hidden z-40' ref={menuRef}>

<div className='flex items-end justify-end'><MdOutlineClose  className='text-white bg-[#80BC39] text-[25px] p-1 ' onClick={(e)=>setActive(false)}/></div>
   <div className=' flex flex-col gap-y-6'>
   <Link href={"/"}><li className={pathName === "/" ? "border-b-2 border-[#80BC39] w-fit" : ""}>Home</li></Link>
    <Link href={"/"}><li >About</li></Link>
    <Link href={"/"}><li>Blog</li></Link>
    <Link href={"/"}><li>Support</li></Link>
   </div>
</ul></div>)}
    </div>
  )
}

export default Navbar
