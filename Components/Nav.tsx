import React from 'react';
import {Bars3Icon} from "@heroicons/react/20/solid";
import Link from 'next/link';

interface Props {
    openNav: () => void;
}

const Nav = ({openNav} : Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
                WEB<span className='text-yellow-300'>DEV</span>
            </h1>
            <div className='nav-link'><Link href="/">Home</Link></div>           
            <div className='nav-link'><Link href="#education">EDUCATION</Link></div>
            <div className='nav-link'><Link href="#skills">EXPERIENCE & SKILLS</Link></div>
            <div className='nav-link'><Link href="#projects">PROJECTS</Link></div>
            <div className='nav-link'><Link href="#contact">CONTACT</Link></div>
            <div onClick={openNav}>
                <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300'/>
            </div>
        </div>
    </div>
  )
}

export default Nav 