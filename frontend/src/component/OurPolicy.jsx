import React from 'react'
import Title from './Title'
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function OurPolicy() {
  return (
    <div className='w-full min-h-screen md:min-h-0 md:h-auto py-[60px] md:py-[80px] flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[40px] md:gap-[50px] px-[15px]'>

      <div className='w-full text-center'>
        <Title text1={"OUR"} text2={"POLICY"} />
        <p className='max-w-[600px] m-auto text-[13px] md:text-[18px] px-[10px] text-blue-100 mt-[10px]'>
          Customer-Friendly Policies – Committed to Your Satisfaction and Safety.
        </p>
      </div>

      <div className='w-full flex items-stretch justify-center flex-wrap gap-[40px] md:gap-[50px] lg:gap-[60px]'>

        <div className='w-full sm:w-[280px] md:w-[320px] max-w-[400px] flex items-center justify-center flex-col gap-[10px]'>
          <RiExchangeFundsLine className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] text-[#90b9ff]' />
          <p className='font-semibold text-[17px] sm:text-[19px] md:text-[22px] lg:text-[25px] text-[#a5e8f7] text-center'>
            Easy Exchange Policy
          </p>
          <p className='font-semibold text-[12px] sm:text-[13px] md:text-[16px] lg:text-[18px] text-[aliceblue] text-center'>
            Exchange Made Easy – Quick, Simple, and Customer-Friendly Process.
          </p>
        </div>

        <div className='w-full sm:w-[280px] md:w-[320px] max-w-[400px] flex items-center justify-center flex-col gap-[10px]'>
          <TbRosetteDiscountCheckFilled className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] text-[#90b9ff]' />
          <p className='font-semibold text-[17px] sm:text-[19px] md:text-[22px] lg:text-[25px] text-[#a5e8f7] text-center'>
            7 Days Return Policy
          </p>
          <p className='font-semibold text-[12px] sm:text-[13px] md:text-[16px] lg:text-[18px] text-[aliceblue] text-center'>
            Shop with Confidence – 7 Days Easy Return Guarantee.
          </p>
        </div>

        <div className='w-full sm:w-[280px] md:w-[320px] max-w-[400px] flex items-center justify-center flex-col gap-[10px]'>
          <BiSupport className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] text-[#90b9ff]' />
          <p className='font-semibold text-[17px] sm:text-[19px] md:text-[22px] lg:text-[25px] text-[#a5e8f7] text-center'>
            Best Customer Support
          </p>
          <p className='font-semibold text-[12px] sm:text-[13px] md:text-[16px] lg:text-[18px] text-[aliceblue] text-center'>
            Trusted Customer Support – Your Satisfaction Is Our Priority.
          </p>
        </div>

      </div>
    </div>
  )
}

export default OurPolicy