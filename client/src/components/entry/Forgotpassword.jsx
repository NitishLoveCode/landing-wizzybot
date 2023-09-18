import React from 'react'
import { Link } from 'react-router-dom'

export default function Forgotpassword() {
  return (
    <>
        <div className='flex flex-col mt-[8vh] sm:mt-[15vh] gap-4 items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <img src="https://app.livechatai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.99eba397.png&w=48&q=75" alt="logo" />
                <h1 className='text-2xl sm:text-3xl font-bold'>Forgot password</h1>
                <h3 className='text-gray-500'>Reset your password or <span className='font-bold text-main cursor-pointer active:scale-95'><Link to={"/login"}>return to login</Link></span></h3>
            </div>
            <div className='bg-blue-100 rounded-md gap-4 md:w-[50vw] w-[95vw] p-2 sm:w-[32vw] h-[35vh] sm:p-10 flex flex-col justify-center'>
              <label>Email address</label>
              <input className='h-10 outline-none rounded-md pl-2 pr-2' type="email" name="email" placeholder='Email'/>
              <button className='bg-main active:scale-95 w-full h-10 text-white rounded-md'>Send Email</button>
            </div>
        </div>
    </>
  )
}
