import React, { useContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { authDataContext } from '../context/AuthContext'

function NewLetterBox() {
    let [email,setEmail] = useState("")
    let [loading,setLoading] = useState(false)
    let {serverUrl} = useContext(authDataContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const result = await axios.post(serverUrl + "/api/subscribe", {email})
            if(result.data){
                toast.success("Successfully requested for subscription", { position:'top-center' })
                setEmail("")
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || "Subscription Failed", { position:'top-center' })
        }
        setLoading(false)
    }
  return (
    <div className='w-[100%] h-[40vh]  bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-start gap-[10px] flex-col'>
      <p className='md:text-[30px] text-[20px] text-[#a5faf7] font-semibold px-[20px]'>Subscribe now & get 20% off</p>
      <p className='md:text-[18px] text-[14px] text-center text-blue-100 font-semibold px-[20px]'>Subscribe now and enjoy exclusive savings, special deals, and early access to new collections.</p>
      <form onSubmit={handleSubmit} className='w-[100%] h-[30%] md:h-[50%] flex items-center justify-center mt-[20px] gap-[20px] px-[20px]'>
        <input type="email" placeholder='Enter Your Email' className='placeholder:text-[black] bg-slate-300 w-[600px] max-w-[60%] h-[40px]  px-[20px] rounded-lg shadow-sm shadow-black' onChange={(e)=>setEmail(e.target.value)} value={email} required />
        <button type='submit' disabled={loading} className='text-[15px] md:text-[16px] px-[10px] md:px-[30px] py-[12px] md:py-[10px]  hover:bg-slate-500 cursor-pointer bg-[#2e3030c9]  text-white flex items-center justify-center gap-[20px]  border-[1px] border-[#80808049]  rounded-lg shadow-sm shadow-black'>{loading ? "Sending..." : "Subscribe"}</button>
      </form>
    </div>
  )
}

export default NewLetterBox