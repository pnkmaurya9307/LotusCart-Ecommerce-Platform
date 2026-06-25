import React, { useContext, useState ,useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import { toast } from 'react-toastify';
import { IoSearchCircleOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { userDataContext } from '../context/UserContext';
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import axios from 'axios';
import { authDataContext } from '../context/AuthContext';
import { shopDataContext } from '../context/ShopContext';
function Nav() {
    let {getCurrentUser , userData,setUserData} = useContext(userDataContext)
    let {serverUrl} = useContext(authDataContext)
    let {showSearch,setShowSearch,search,setSearch,getCartCount} = useContext(shopDataContext)
    let [showProfile,setShowProfile] = useState(false)
    let navigate = useNavigate()
    let location = useLocation()
    let profileRef = useRef(null)

useEffect(()=>{
    setShowProfile(false)
    if(location.pathname !== '/collection'){
        setShowSearch(false)
        setSearch('')
    }
},[location.pathname])
const isActive = (path) => location.pathname === path

    useEffect(()=>{
        const handleClickOutside = (e) => {
            if(profileRef.current && !profileRef.current.contains(e.target)){
                setShowProfile(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    },[])
const handleLogout = async () => {
    try {
        const result = await axios.get(serverUrl + "/api/auth/logout" , {withCredentials:true})
        console.log(result.data)
        toast.success("Logout Successful", { position:'top-center' })
        setUserData(null)
        
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || "Logout Failed", { position:'top-center' })
    }
    
}
  return (
    <div className='w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex  items-center justify-between px-[15px] md:px-[30px] shadow-md shadow-black '>

        <div className='flex items-center justify-start gap-[8px] md:gap-[10px] flex-shrink min-w-0'>
            <img src={logo} alt="" className='w-[24px] md:w-[30px] flex-shrink-0' />
            <h1 className='text-[18px] md:text-[25px] text-black font-sans truncate'>LotusCart</h1>
        </div>
       <div className='flex-1 hidden md:flex justify-center min-w-0 px-[5px]'>
<ul className='flex items-center justify-center gap-[6px] lg:gap-[19px] text-[white] flex-wrap'>
    <li className={`text-[11px] lg:text-[15px] hover:bg-slate-500 cursor-pointer py-[6px] lg:py-[10px] px-[8px] lg:px-[20px] rounded-2xl whitespace-nowrap ${isActive('/') ? 'bg-[#5555f6cf] text-white font-semibold' : 'bg-[#000000c9]'}`} onClick={()=>navigate("/")}>HOME</li>
    <li className={`text-[11px] lg:text-[15px] hover:bg-slate-500 cursor-pointer py-[6px] lg:py-[10px] px-[8px] lg:px-[20px] rounded-2xl whitespace-nowrap ${isActive('/collection') ? 'bg-[#5555f6cf] text-white font-semibold' : 'bg-[#000000c9]'}`} onClick={()=>navigate("/collection")}>COLLECTIONS</li>
    <li className={`text-[11px] lg:text-[15px] hover:bg-slate-500 cursor-pointer py-[6px] lg:py-[10px] px-[8px] lg:px-[20px] rounded-2xl whitespace-nowrap ${isActive('/order') ? 'bg-[#5555f6cf] text-white font-semibold' : 'bg-[#000000c9]'}`} onClick={()=>navigate("/order")}>ORDERS</li>
    <li className={`text-[11px] lg:text-[15px] hover:bg-slate-500 cursor-pointer py-[6px] lg:py-[10px] px-[8px] lg:px-[20px] rounded-2xl whitespace-nowrap ${isActive('/cart') ? 'bg-[#5555f6cf] text-white font-semibold' : 'bg-[#000000c9]'}`} onClick={()=>navigate("/cart")}>CART</li>
</ul>
</div>
        <div className='flex items-center justify-end gap-[12px] md:gap-[20px] flex-shrink-0'>
         {!showSearch && <IoSearchCircleOutline  className='w-[30px] h-[30px] md:w-[38px] md:h-[38px] text-[#000000]  cursor-pointer' onClick={()=>{setShowSearch(prev=>!prev);navigate("/collection")}}/>}
           {showSearch && <IoSearchCircleSharp  className='w-[30px] h-[30px] md:w-[38px] md:h-[38px] text-[#000000]  cursor-pointer' onClick={()=>setShowSearch(prev=>!prev)}/>}

        <div className='relative'>
         <MdOutlineShoppingCart className='w-[30px] h-[30px] text-[#000000]  cursor-pointer hidden md:block' onClick={()=>navigate("/cart")}/>
{getCartCount() > 0 && <p className='absolute w-[18px] h-[18px] flex items-center  justify-center bg-black px-[5px] py-[2px] text-white  rounded-full text-[9px] top-[-10px] right-[-13px] hidden md:block'>{getCartCount()}</p>}        </div>

        <div ref={profileRef} className='relative'>
         {!userData && <FaCircleUser className='w-[24px] h-[24px] md:w-[29px] md:h-[29px] text-[#000000]  cursor-pointer' onClick={()=>setShowProfile(prev=>!prev)}/>}
         {userData && <div className='w-[26px] h-[26px] md:w-[30px] md:h-[30px] bg-[#080808] text-[white] rounded-full flex items-center justify-center cursor-pointer text-[13px] md:text-[16px]' onClick={()=>setShowProfile(prev=>!prev)}>{userData?.name.slice(0,1)}</div>}
       {showProfile && <div className='absolute w-[200px] md:w-[220px] h-[150px] bg-[#000000d7] top-[160%] right-[0%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10'>
        <ul className='w-[100%] h-[100%] flex items-start justify-around flex-col text-[15px] md:text-[17px] py-[10px] text-[white]'>
            {!userData && <li className='w-[100%] hover:bg-[#2f2f2f]  px-[15px] py-[10px] cursor-pointer' onClick={()=>{
                navigate("/login");setShowProfile(false)
            }}>Login</li>}
            <li className='w-[100%] hover:bg-[#2f2f2f]  px-[15px] py-[10px] cursor-pointer'onClick={()=>{navigate("/contact");setShowProfile(false)}} >Contact</li>           
            <li className='w-[100%] hover:bg-[#2f2f2f]  px-[15px] py-[10px] cursor-pointer'onClick={()=>{navigate("/about");setShowProfile(false)}} >About</li>
            {userData && <li className='w-[100%] hover:bg-[#2f2f2f]  px-[15px] py-[10px] cursor-pointer' onClick={()=>{handleLogout();setShowProfile(false)}}>LogOut</li>}

        </ul>

        </div>}
        </div>
        </div>
       {showSearch && <div className='w-[100%]  h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center '>
            <input type="text" className='lg:w-[50%] w-[80%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-[white] text-[18px]' placeholder='Search Here' onChange={(e)=>{setSearch(e.target.value)}} value={search} />
        </div>}

<div className='w-[100vw] h-[80px] md:h-[90px] flex items-center justify-between px-[30px] md:px-[20px] text-[10px] md:text-[12px]         fixed bottom-0 left-0 bg-[#191818]   md:hidden'>



            <button className={`flex items-center justify-center flex-col gap-[2px] ${isActive('/') ? 'text-[#7a7aff]' : 'text-[white]'}`} onClick={()=>navigate("/")}><IoMdHome className={`w-[22px] h-[22px] md:w-[28px] md:h-[28px] md:hidden ${isActive('/') ? 'text-[#7a7aff]' : 'text-[white]'}`}/> Home</button>
             <button className={`flex items-center justify-center flex-col gap-[2px] ${isActive('/collection') ? 'text-[#7a7aff]' : 'text-[white]'}`} onClick={()=>navigate("collection")}><HiOutlineCollection className={`w-[22px] h-[22px] md:w-[28px] md:h-[28px] md:hidden ${isActive('/collection') ? 'text-[#7a7aff]' : 'text-[white]'}`}/> Collections</button>
<button
  className={`flex items-center justify-center flex-col gap-[2px] ${isActive('/order') ? 'text-[#7a7aff]' : 'text-[white]'}`}
  onClick={() => {
    navigate("/order");
    setShowProfile(false);
  }}
>
  <MdOutlineShoppingBag className={`w-[22px] h-[22px] md:w-[28px] md:h-[28px] md:hidden ${isActive('/order') ? 'text-[#7a7aff]' : 'text-[white]'}`} />
  Orders
</button>
               <button className={`flex items-center justify-center flex-col gap-[2px] ${isActive('/cart') ? 'text-[#7a7aff]' : 'text-[white]'}`} onClick={()=>navigate("/cart")}><MdOutlineShoppingCart className={`w-[22px] h-[22px] md:w-[28px] md:h-[28px] md:hidden ${isActive('/cart') ? 'text-[#7a7aff]' : 'text-[white]'}`}/> Cart</button>
{getCartCount() > 0 && <p className='absolute w-[18px] h-[18px] flex items-center justify-center bg-white px-[5px] py-[2px] text-black font-semibold  rounded-full text-[9px] top-[8px] right-[18px]'>{getCartCount()}</p>}
        </div>
    
    </div>
  )
}

export default Nav