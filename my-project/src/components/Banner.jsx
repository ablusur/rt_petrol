import React from 'react'
import BanImg from "../assets/bann.png"


const Banner = () => {
  return (
    <div style ={{backgroundImage:`url(${BanImg})` }} className='py-[100px] relative z-50 after:absolute after:content-[""] after:h-full after:w-full after:bg-[rgba(0,0,0,0.50)] after:top-0 after:left-0'>
    <div className="max-w-container mx-auto">
    <h2 className='text-white after:-z-50 font-popps lg:text-[64px] font-bold lg:pr-[100px] lg:leading-[75px]'>We exist since 1975 on the oil and gas industry.</h2>
    <div className="mt-10">
    <button className='py-[13px] px-[40px] bg-[#F40404] text-white font-popps text-[16px] font-semibold'>LEARN MORE</button>
    </div>
    </div>
    </div>
  )
}

export default Banner