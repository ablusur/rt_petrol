import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    let [show, setShow] = useState(false)
    let handleShow = ()=>{
       setShow(!show)
    }
  return (
    <nav className='bg-[#F40404] py-[30px]'>
     <div className="max-w-container mx-auto">
       <div className="main flex items-center justify-between flex-wrap">
        <div className="">
           <div className="">
            <img src={Logo} alt="" />
            </div> 
        </div>
        <div className="">
            <ul className= {`lg:flex lg:gap-x-10 lg:static py-6 text-center lg:py-0 ${show == true ? "bg-[green] absolute top-[265px] left-0 w-full duration-500 ease-in-out z-[999] ": "absolute -z-10 top-[-275px] left-0 w-full duration-500 ease-in-out"}`} >
                <li className='font-popps font-semibold text-[#fff] text-[16px] py-2 lg:p-4 hover:text-[#222] duration-500 ease-in-out'>Home</li>
                <li className='font-popps font-semibold text-[#fff] text-[16px] py-2 lg:p-4 hover:text-[#222] duration-500 ease-in-out'>About</li>
                <li className='font-popps font-semibold text-[#fff] text-[16px] py-2 lg:p-4 hover:text-[#222] duration-500 ease-in-out'>Services</li>
                <li className='font-popps font-semibold text-[#fff] text-[16px] py-2 lg:p-4 hover:text-[#222] duration-500 ease-in-out'>Gallary</li>
                <li className='font-popps font-semibold text-[#fff] text-[16px] py-2 lg:p-4 hover:text-[#222] duration-500 ease-in-out'>Blog</li>
                <li className='font-popps font-semibold text-[#fff] text-[16px] border-2 border-[#fff] lg:p-4 bg-cover hover:text-[#222] duration-500 ease-in-out lg:block py-3'>CONTACT</li>
            </ul>
        </div>
        <div className="lg:hidden" onClick={handleShow}>
            {show == true?<RxCross2/>:<FaBars/>}
        </div>
       </div>
    </div>
    </nav>
  )
}

export default Navbar