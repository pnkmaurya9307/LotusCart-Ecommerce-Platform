import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
function Footer() {
    const navigate = useNavigate()
 return (
    <div className='w-[100%] mb-[77px] md:mb-[0px]'>
        <div className='w-[100%] bg-[#dbfcfcec] flex flex-col md:flex-row items-center justify-center gap-[15px] md:gap-[20px] md:px-[50px] px-[15px] py-[20px] md:py-[40px]'>
            <div className='md:w-[30%] w-[100%] flex items-center md:items-start justify-center flex-col gap-[5px] text-center md:text-left px-[15px] md:px-[0px]'>
                <div className='flex items-center md:items-start justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                    <img src={logo} alt=""  className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]'/>
                    <p className='text-[19px] md:text-[20px] text-[black] '>LotusCart</p>
            
                </div>
                <p className='text-[15px] text-[#1e2223] hidden md:block'>LotusCart is your all-in-one online shopping destination, offering top-quality products, unbeatable deals, and fast delivery—all backed by trusted service designed to make your life easier every day.</p>
                    <p className='text-[15px] text-[#1e2223] flex md:hidden'>Fast. Easy. Reliable. LotusCart Shopping</p>

                
            </div>
<div className='md:w-[25%] w-[100%] flex items-center justify-center flex-col text-center'>                    <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                        <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans '>COMPANY</p>

                    </div>
                    <ul>
                         <li className='text-[15px] text-[#1e2223] cursor-pointer hover:underline' onClick={()=>{navigate("/"); window.scrollTo(0,0)}}>Home</li>
                        <li className='text-[15px] text-[#1e2223] cursor-pointer hover:underline' onClick={()=>navigate("/about")}>About us</li>
                        <li className='text-[15px] text-[#1e2223] cursor-pointer hover:underline' onClick={()=>navigate("/privacy-policy")}>Privacy Policy</li>
                    </ul>
                </div>

<div className='md:w-[25%] w-[100%] flex items-center justify-center flex-col text-center '>                     <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                        <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans '>GET IN TOUCH</p>

                    </div>
                     <ul>
                         <li className='text-[15px] text-[#1e2223] '>+91-9817793997</li>
                        <li className='text-[15px] text-[#1e2223] '>pnkmaurya9307@gmail.com</li>
                        <li className='text-[15px] text-[#1e2223] hidden md:block'>+1-123-456-7890</li>
                        <li className='text-[15px] text-[#1e2223] hidden md:block'>admin@lotuscart.com</li>
                    </ul>
                </div>

        </div>
        <div className='w-[100%] h-[1px] bg-slate-400'></div>
        <div className='w-[100%] md:h-[5vh] h-[6vh] bg-[#dbfcfcec] flex items-center justify-center px-[15px] text-center'>
          <p className='text-[11px] md:text-[15px]'>Copyright 2026@lotuscart.com-All Rights Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer