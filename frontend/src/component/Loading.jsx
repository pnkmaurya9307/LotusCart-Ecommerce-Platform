import React from 'react'

function Loading() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='animate-spin h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 border-[3px] sm:border-4 border-white border-t-transparent rounded-full'></div>
    </div>
  )
}

export default Loading