import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Title from './Title'
import Card from './Card'

function RelatedProduct({ category, subCategory, currentProductId }) {

  let { products } = useContext(shopDataContext)
  let [related, setRelated] = useState([])

  useEffect(() => {
    if (products.length > 0) {

      let productsCopy = products.slice()
      productsCopy = productsCopy.filter((item) => category === item.category)
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)
      productsCopy = productsCopy.filter((item) => currentProductId !== item._id)
      setRelated(productsCopy.slice(0, 4))

    }
  }, [products, category, subCategory, currentProductId])

  return (
    <div className='my-[60px] sm:my-[80px] md:my-[100px] px-[15px] md:px-[60px]'>
      <div className='text-center md:text-left'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>
      <div className='w-full mt-[20px] sm:mt-[25px] md:mt-[30px] flex items-center justify-center flex-wrap gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px]'>
        {
          related.map((item, index) => (
            <Card key={index} id={item._id} name={item.name} price={item.price} image={item.image1} />
          ))
        }
      </div>
    </div>
  )
}

export default RelatedProduct