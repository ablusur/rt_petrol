import React from 'react'
import BanImg from "../assets/bann.png"


const Banner = () => {
  return (
    <div style ={{backgroundImage:`url(${BanImg})` }} className='py-[100px] relative after:absolute after:content-[""] after:h-full after:w-full after: bg-[red] after:top-0 after:left-0 '>Banner</div>
  )
}

export default Banner