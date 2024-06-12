import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF,FaTwitter,FaLinkedin,FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <header className='bg-[#282828] py-6'>
    <div className='max-w-container mx-auto text-white'>
        <div className="lg:flex">  
            <div className="w-full lg:w-[25%]">
                 <div className="flex items-center lg:justify-start justify-center py-3 lg:py-0">
                   <MdEmail className=''/>
                   <h3 className='font-osens pl-2'>mail@yourcompany.com</h3>
                 </div>
            </div>
            <div className="w-full lg:w-[25%]">
                <div className="flex items-center lg:justify-start justify-center py-3 lg:py-0">
                  <IoCallOutline/><p className='font-osens pl-2'>+896 120 5889 (Toll free)</p>
                </div>
            </div>
            <div className="w-full lg:w-[50%]">
                <div className="flex lg:justify-end gap-4 justify-center">
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