import React from 'react'

export default function Loading() {
  return (
    <>
        <div className='flex flex-col justify-center items-center'>
            <div className=' border-4 border-t-transparent rounded-full animate-spin border-gray-800 w-20 h-20'></div>
            <div className='text-xl sm:text-2xl'>Loading...</div>
        </div>
    </>
  )
}