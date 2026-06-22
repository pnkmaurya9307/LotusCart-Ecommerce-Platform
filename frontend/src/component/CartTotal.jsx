import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Title from './Title'

function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(shopDataContext)

  return (
    <div className='w-full'>
      <div className='text-xl py-[10px]'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm p-[15px] sm:p-[20px] md:p-[30px] border-[2px] border-[#4d8890] rounded-lg'>

        <div className='flex justify-between items-center text-white text-[14px] sm:text-[16px] md:text-[18px] p-[6px] sm:p-[8px] md:p-[10px]'>
          <p>Subtotal</p>
          <p>{currency} {getCartAmount()}.00</p>
        </div>
        <hr className='border-[#4d8890]' />

        <div className='flex justify-between items-center text-white text-[14px] sm:text-[16px] md:text-[18px] p-[6px] sm:p-[8px] md:p-[10px]'>
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}</p>
        </div>
        <hr className='border-[#4d8890]' />

        <div className='flex justify-between items-center text-white text-[14px] sm:text-[16px] md:text-[18px] p-[6px] sm:p-[8px] md:p-[10px]'>
          <b>Total</b>
          <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</b>
        </div>

      </div>
    </div>
  )
}

export default CartTotal