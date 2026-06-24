import React, { useContext, useEffect, useState } from 'react'
import Title from '../component/Title'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";
import CartTotal from '../component/CartTotal';

function Cart() {
    const { products, currency, cartItem ,updateQuantity } = useContext(shopDataContext)
  const [cartData, setCartData] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData); 

  }, [cartItem]);
  return (
<div className='w-[100vw] min-h-[100vh] p-[15px] md:p-[20px] pb-[120px] md:pb-[20px] overflow-x-hidden bg-gradient-to-l from-[#141414] to-[#0c2025] '>      <div className='w-[100%] text-center mt-[80px]'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

<div className='w-[100%] flex flex-col gap-[15px] mt-[20px]'>
        {
         cartData.length === 0 ? (
            <div className='w-full flex flex-col items-center justify-center mt-[80px] gap-[15px]'>
              <p className='text-[50px]'>🛒</p>
              <p className='text-[22px] md:text-[28px] text-[#aaf4e7] font-semibold'>Your Cart is Empty!</p>
              <p className='text-[14px] md:text-[17px] text-[#ffffff80] text-center'>You have not added anything to your cart yet.</p>
              <button className='mt-[10px] px-[30px] py-[10px] bg-[#51808048] border border-[#9ff9f9] text-white rounded-2xl text-[15px] hover:bg-slate-600 cursor-pointer' onClick={()=>navigate('/collection')}>Shop Now</button>
            </div>
         ) : cartData.map((item,index)=>{
             const productData = products.find((product) => product._id === item._id);
            if (!productData) return null
             return (
              <div key={index} className='w-[100%] bg-[#51808048] rounded-2xl px-[15px] md:px-[20px] py-[15px] flex items-center gap-[12px] md:gap-[20px]'>

                  <img className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-md flex-shrink-0 object-cover' src={productData.image1} alt="" />

                  <div className='flex-1 min-w-0 flex flex-col gap-[8px] md:gap-[10px]'>
                    <p className='text-[16px] md:text-[25px] text-[#f3f9fc] truncate'>{productData.name}</p>
                    <p className='text-[14px] md:text-[20px] text-[#aaf4e7]'>{currency} {productData.price}</p>

                    <div className='flex items-center gap-[10px] md:gap-[15px]'>
                      <p className='w-[35px] h-[35px] md:w-[40px] md:h-[40px] text-[14px] md:text-[16px] text-[white] bg-[#518080b4] rounded-md flex items-center justify-center border-[1px] border-[#9ff9f9]'>{item.size}</p>
                      <input type="number" min={1} defaultValue={item.quantity} className='w-[35px] h-[35px] md:w-[40px] md:h-[40px] px-0 py-0 text-[white] text-[14px] md:text-[16px] font-semibold bg-[#518080b4] border-[1px] border-[#9ff9f9] rounded-md text-center' onChange={(e)=> (e.target.value === ' ' || e.target.value === '0') ? null  :  updateQuantity(item._id,item.size,Number(e.target.value))} />
                    </div>
                  </div>

                  <RiDeleteBin6Line className='text-[#9ff9f9] w-[20px] h-[20px] md:w-[25px] md:h-[25px] flex-shrink-0 cursor-pointer self-center' onClick={()=>updateQuantity(item._id,item.size,0)}/>

              </div>
             )
         })
        }
      </div>

<div className='flex justify-center items-end my-[40px] md:my-20'>
<div className='w-full sm:w-[450px] flex flex-col items-center text-center'>           <CartTotal/>
            <button className='text-[15px] md:text-[18px] hover:bg-slate-500 cursor-pointer bg-[#51808048] py-[10px] px-[30px] md:px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px]  border-[1px] border-[#80808049] mt-[20px]' onClick={()=>{
                if (cartData.length > 0) {
      navigate("/placeorder");
    } else {
      console.log("Your cart is empty!");
    }
            }}>
                PROCEED TO CHECKOUT
            </button>
        </div>
      </div>
      
    </div>
  )
}

export default Cart