import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <>
        <div className='w-screen pt-8 flex flex-col items-center h-screen bg-slate-50'>
                <div className='flex flex-col gap-1 mb-4 justify-center text-center items-center'>
                    <div>
                        <img src="https://app.livechatai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.99eba397.png&w=48&q=75" alt='logo'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-4xl font-semibold'>Create a free account</h1>
                        <h3>Already have an account? <span className='font-bold text-main'><Link to="/login">Sign In</Link></span></h3>
                    </div>
                </div>

                {/* ---------------user field section seart from here-------- */}
                <div className='w-[30%] h-[68%] gap-9 flex flex-col p-4 bg-white border-2 rounded-md'>
                    <div className='flex flex-col'>
                        <label>Full name</label>
                        <input className='h-10 border-2 hover:border-main rounded-md pl-2 pr-2 outline-none' type="text" name="name"/>
                    </div>
                    <div className='flex flex-col'>
                        <label>Email address</label>
                        <input className='h-10 border-2 hover:border-main rounded-md pl-2 pr-2 outline-none' type="email" name="email"/>
                    </div>
                    <div className='flex flex-col'>
                        <label>Password</label>
                        <input className='h-10 border-2 hover:border-main rounded-md pl-2 pr-2 outline-none' type="password" name="passwod"/>
                    </div>
                    <div className='gap-3 flex'>
                        <input className='w-4' type="checkbox" name="policy"/>
                        <label className='underline'>I accept the privacy policy</label>
                    </div>
                    <div className='bg-main w-full cursor-pointer active:scale-95 justify-center flex h-10 text-white rounded-md'>
                        <button>Register</button>
                    </div>
                </div>
        </div>
    </>
  )
}
