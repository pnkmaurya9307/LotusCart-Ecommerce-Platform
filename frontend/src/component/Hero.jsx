import React from 'react'
import { FaCircle } from "react-icons/fa";

function Hero({ heroData, heroCount, setHeroCount }) {
  return (
<div className='w-[50%] sm:w-[50%] md:w-[40%] h-full absolute top-0 left-0 z-[10] flex flex-col justify-center px-[5%] bg-gradient-to-r from-[#0c2025f0] via-[#0c2025cc] to-transparent'>
      <div className='text-[#88d9ee] text-[22px] sm:text-[28px] md:text-[40px] lg:text-[55px] leading-tight'>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className='flex items-center justify-center sm:justify-start gap-[10px] mt-[20px] sm:mt-[30px] md:mt-[40px]'>
        <FaCircle
          className={`w-[10px] sm:w-[12px] md:w-[14px] cursor-pointer transition-colors ${heroCount === 0 ? "fill-orange-400" : "fill-white"}`}
          onClick={() => setHeroCount(0)}
        />
        <FaCircle
          className={`w-[10px] sm:w-[12px] md:w-[14px] cursor-pointer transition-colors ${heroCount === 1 ? "fill-orange-400" : "fill-white"}`}
          onClick={() => setHeroCount(1)}
        />
        <FaCircle
          className={`w-[10px] sm:w-[12px] md:w-[14px] cursor-pointer transition-colors ${heroCount === 2 ? "fill-orange-400" : "fill-white"}`}
          onClick={() => setHeroCount(2)}
        />
        <FaCircle
          className={`w-[10px] sm:w-[12px] md:w-[14px] cursor-pointer transition-colors ${heroCount === 3 ? "fill-orange-400" : "fill-white"}`}
          onClick={() => setHeroCount(3)}
        />
      </div>

    </div>
  )
}

export default Hero