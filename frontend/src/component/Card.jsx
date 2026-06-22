import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

function Card({ name, image, id, price }) {
  let { currency } = useContext(shopDataContext)
  let navigate = useNavigate()

  return (
    <div
      className='w-full sm:w-[220px] md:w-[260px] lg:w-[300px] bg-[#ffffff0a] backdrop-blur-lg rounded-lg hover:scale-[102%] transition-transform duration-200 flex items-start justify-start flex-col p-[10px] cursor-pointer border-[1px] border-[#80808049]'
      onClick={() => navigate(`/productdetail/${id}`)}
    >
      <img
        src={image}
        alt={name}
        className='w-full aspect-[4/5] object-cover rounded-sm'
      />
      <div className='text-[#c3f6fa] text-[14px] sm:text-[16px] md:text-[18px] py-[8px] md:py-[10px] w-full truncate'>
        {name}
      </div>
      <div className='text-[#f3fafa] text-[12px] sm:text-[13px] md:text-[14px]'>
        {currency} {price}
      </div>
    </div>
  )
}

export default Card