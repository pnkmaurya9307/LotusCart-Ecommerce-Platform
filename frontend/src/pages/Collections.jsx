import React, { useContext, useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Title from '../component/Title';
import { shopDataContext } from '../context/ShopContext';
import Card from '../component/Card';

function Collections() {
    let [showFilter,setShowFilter] = useState(false)
    let {products,search,showSearch} = useContext(shopDataContext)
    let [filterProduct,setFilterProduct] = useState([])
    let [category,setCaterory] = useState([])
    let [subCategory,setSubCaterory] = useState([])
    let [sortType,SetSortType] = useState("relavent")

    const toggleCategory = (e) =>{
        if(category.includes(e.target.value)){
            setCaterory(prev => prev.filter(item => item !== e.target.value))
        }else
         {
            setCaterory(prev => [...prev,e.target.value])
         }
    }

    const toggleSubCategory = (e) =>{
         if(subCategory.includes(e.target.value)){
            setSubCaterory(prev => prev.filter(item => item !== e.target.value))
        }else
         {
            setSubCaterory(prev => [...prev,e.target.value])
         }
    }

    const applyFilter = ()=>{
        let productCopy = products.slice()

        if(showSearch && search){
            productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if(category.length > 0)
        {
            productCopy = productCopy.filter(item => category.includes(item.category))
        }
        if(subCategory.length > 0)
        {
            productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
        }
        setFilterProduct(productCopy)

    }


    const sortProducts = (e)=>{
        let fbCopy = filterProduct.slice()

        switch(sortType){
         case 'low-high':
            setFilterProduct(fbCopy.sort((a,b)=>(a.price - b.price)))
        break;

         case 'high-low':
            setFilterProduct(fbCopy.sort((a,b)=>(b.price - a.price)))
        break;
        default:
            applyFilter()
        break;
        }

    }
    useEffect(()=>{
        sortProducts()
    },[sortType])


    useEffect(()=>{
    setFilterProduct(products)
    },[products])

    useEffect(()=>{
        applyFilter()
    },[category,subCategory,search ,showSearch])






  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start flex-col lg:flex-row justify-start  pt-[70px] overflow-x-hidden z-[2] pb-[110px]'>
      <div className={`lg:w-[20vw] w-[100%] lg:min-h-[100vh] ${showFilter ? "h-auto" :"h-[8vh]"}  p-[15px] md:p-[20px] border-r-[1px] border-gray-400  text-[#aaf5fa] lg:fixed `}>
        <p className='text-[20px] md:text-[25px] font-semibold flex gap-[5px] items-center justify-start cursor-pointer' onClick={()=>setShowFilter(prev=>!prev)}>FILTERS
            {!showFilter && <FaChevronRight className='text-[18px] lg:hidden'  />}
           {showFilter && <FaChevronDown className='text-[18px] lg:hidden'  />}
        </p>
        

        <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "" : "hidden"} lg:block`}>
            <p className='text-[18px] text-[#f8fafa]'>CATEGORIES</p>
            <div className='w-full max-w-[230px] flex items-start justify-center gap-[10px] flex-col py-[5px]'>
               <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'Clothing'} className='w-3' onChange={toggleCategory} /> Clothing</p>
<p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'Footwear'} className='w-3' onChange={toggleCategory} /> Footwear</p>
<p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'Accessories'} onChange={toggleCategory} className='w-3' /> Accessories</p>
            </div>
        </div>
        <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "" : "hidden"} lg:block`}>
            <p className='text-[18px] text-[#f8fafa]'>SUB-CATEGORIES</p>
            <div className='w-full max-w-[230px] flex items-start justify-center gap-[10px] flex-col py-[5px]'>
                <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'Men'} className='w-3' onChange={toggleSubCategory} /> Men</p>
<p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'Women'} className='w-3' onChange={toggleSubCategory} /> Women</p>
<p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'Kids'} className='w-3' onChange={toggleSubCategory} /> Kids</p>
            </div>
        </div>
      </div>
      <div className='w-full lg:pl-[20vw]'>
        <div className='w-full flex justify-between items-center md:items-end flex-col lg:flex-row gap-[15px] lg:gap-0 px-[15px] lg:px-[50px] py-[15px] lg:py-0'>
            <Title text1={"ALL"} text2={"COLLECTIONS"}/>

            <select name="" id="" className='bg-slate-600 w-full md:w-[250px] lg:w-[200px] h-[45px] md:h-[50px] px-[10px] text-[white] rounded-lg hover:border-[#46d1f7] border-[2px]' onChange={(e)=>SetSortType(e.target.value)}>
                <option value="relavent" className='w-[100%] h-[100%]'>Sort By: Relavent</option>
                <option value="low-high" className='w-[100%] h-[100%]'>Sort By: Low to High</option>
                <option value="high-low" className='w-[100%] h-[100%]'>Sort By: High to Low</option>
            </select>
        </div>
        <div className='w-full min-h-[70vh] flex items-center justify-center flex-wrap gap-[15px] md:gap-[30px] px-[15px] lg:px-[50px] py-[15px]'>
            {
             filterProduct.map((item,index)=>(
                <Card key={index} id={item._id} name={item.name} price={item.price} image={item.image1}/>
             ))
            }
        </div>
      </div>
    </div>
  )
}

export default Collections