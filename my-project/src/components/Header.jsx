import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF,FaTwitter,FaLinkedin,FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <header className='bg-[#282828]'>
    <div className='max-w-container mx-auto h-[50px] text-white'>
        <div className="flex">  
            <div className="w-[25%]">
                 <div className="flex items-center">
                   <MdEmail/><h3 font-osens>mail@yourcompany.com</h3>
                 </div>
            </div>
            <div className="w-[25%]">
                <div className="flex items-center">
                  <IoCallOutline/><p>+896 120 5889 (Toll free)</p>
                </div>
            </div>
            <div className="w-[50%]">
                <div className="flex justify-end">
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaLinkedin/>
                    <FaInstagram/>
                </div>
            </div>
        </div>
    </div>
    </header>
  )
}

export default Header