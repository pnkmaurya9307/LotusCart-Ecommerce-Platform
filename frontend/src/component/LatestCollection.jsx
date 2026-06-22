import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function LatestCollection() {
  let { products } = useContext(shopDataContext)
  let [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0, 8));
  }, [products])

  return (
    <div className='px-[15px] md:px-[60px]'>
      <div className='w-full text-center mt-[40px] sm:mt-[50px]'>
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className='max-w-[600px] m-auto text-[13px] md:text-[18px] lg:text-[20px] px-[10px] text-blue-100 mt-[10px]'>
          Step Into Style – New Collection Dropping This Season!
        </p>
      </div>
      <div className='w-full mt-[20px] sm:mt-[25px] md:mt-[30px] flex items-center justify-center flex-wrap gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px]'>
        {
          latestProducts.map((item, index) => (
            <Card key={index} name={item.name} image={item.image1} id={item._id} price={item.price} />
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection