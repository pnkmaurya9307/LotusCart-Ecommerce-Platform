import React, { useContext, useEffect, useState } from 'react'
import Title from '../component/Title'
import { shopDataContext } from '../context/ShopContext'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'

function Order() {
  let [orderData, setOrderData] = useState([])
  let { currency } = useContext(shopDataContext)
  let { serverUrl } = useContext(authDataContext)

  const loadOrderData = async () => {
    try {
      const result = await axios.post(serverUrl + '/api/order/userorder', {}, { withCredentials: true })
      if (result.data) {
        let allOrdersItem = []
        result.data.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadOrderData()
  }, [])


  return (
    <div className='w-full min-h-screen p-[15px] md:p-[20px] pb-[140px] md:pb-[60px] overflow-x-hidden bg-gradient-to-l from-[#141414] to-[#0c2025]'>
      <div className='w-full text-center mt-[80px]'>
        <Title text1={'MY'} text2={'ORDER'} />
      </div>
      <div className='w-full flex flex-col gap-[15px] md:gap-[20px] mt-[20px]'>
        {
          orderData.map((item, index) => (
            <div key={index} className='w-full border-t border-b'>
              <div className='w-full flex flex-col sm:flex-row items-start gap-[15px] sm:gap-6 bg-[#51808048] py-[15px] px-[15px] md:px-[20px] rounded-2xl'>

                <img src={item.image1} alt="" className='w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] rounded-md object-cover flex-shrink-0' />

                <div className='flex items-start justify-center flex-col gap-[5px] flex-1 min-w-0 w-full'>
                  <p className='text-[16px] sm:text-[20px] md:text-[25px] text-[#f3f9fc] w-full truncate'>{item.name}</p>

                  <div className='flex items-center flex-wrap gap-[8px] md:gap-[20px]'>
                    <p className='text-[12px] sm:text-[15px] md:text-[18px] text-[#aaf4e7]'>{currency} {item.price}</p>
                    <p className='text-[12px] sm:text-[15px] md:text-[18px] text-[#aaf4e7]'>Quantity: {item.quantity}</p>
                    <p className='text-[12px] sm:text-[15px] md:text-[18px] text-[#aaf4e7]'>Size: {item.size}</p>
                  </div>

                  <div className='flex items-center flex-wrap'>
                    <p className='text-[12px] sm:text-[15px] md:text-[18px] text-[#aaf4e7]'>
                      Date: <span className='text-[#e4fbff] pl-[10px] text-[11px] sm:text-[14px] md:text-[16px]'>{new Date(item.date).toDateString()}</span>
                    </p>
                  </div>

                  <div className='flex items-center'>
                    <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#aaf4e7]'>Payment Method: {item.paymentMethod}</p>
                  </div>

                  <div className='w-full flex flex-wrap items-center justify-between gap-[12px] mt-[8px] pt-[8px] border-t border-[#ffffff20]'>
                    <div className='flex items-center gap-[6px]'>
                      <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                      <p className='text-[12px] sm:text-[15px] md:text-[17px] text-[#f3f9fc]'>{item.status}</p>
                    </div>

                    <button
                      className='px-[10px] sm:px-[15px] py-[5px] sm:py-[7px] rounded-md bg-[#101919] text-[#f3f9fc] text-[12px] sm:text-[14px] md:text-[16px] cursor-pointer active:bg-slate-500'
                      onClick={loadOrderData}
                    >
                      Track Order
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Order