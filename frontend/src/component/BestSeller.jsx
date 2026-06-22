import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function BestSeller() {
  let { products } = useContext(shopDataContext)
  let [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    let filterProduct = products.filter((item) => item.bestseller)
    setBestSeller(filterProduct.slice(0, 4));
  }, [products])

  return (
    <div className='px-[15px] md:px-[60px]'>
      <div className='w-full text-center mt-[40px] sm:mt-[50px]'>
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className='max-w-[600px] m-auto text-[13px] md:text-[18px] lg:text-[20px] px-[10px] text-blue-100 mt-[10px]'>
          Tried, Tested, Loved – Discover Our All-Time Best Sellers.
        </p>
      </div>
      <div className='w-full mt-[20px] sm:mt-[25px] md:mt-[30px] flex items-center justify-center flex-wrap gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px]'>
        {
          bestSeller.map((item, index) => (
            <Card key={index} name={item.name} id={item._id} price={item.price} image={item.image1} />
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller