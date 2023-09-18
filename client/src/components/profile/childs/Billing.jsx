import React, { useState } from 'react'
import {BiMessageDetail} from "react-icons/bi"
import {BsFillEmojiLaughingFill} from "react-icons/bs"
import {MdVerified} from "react-icons/md"
import {FaLanguage} from "react-icons/fa"

export default function Billing() {
  const[plan, setplan]=useState("monthly")


  const selectPlan=()=>{
    if(plan==="monthly"){
      setplan("yearly")
    }else{
      setplan("monthly")
    }
  }
  return (
    <>
      <div className='w-full px-4'>
        <div className='items-center justify-center flex flex-col mt-8'>
          <h3 className='text-xl'>ac, you are currently on the Free plan</h3>
          <h4 className='text-md text-gray-500'>Pick the best plan that fits your needs.</h4>
        </div>

        <div className='flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between mt-8'>
          <div className='flex rounded-md items-center border-[1px] 
          shadow-sm sm:shadow-lg w-auto sm:pr-28 px-14 py-5'>
            <div className='flex items-center gap-4'>
              <div className='shadow-md border-[0.5px] p-2'>
                <BiMessageDetail className='text-2xl text-main'/>
              </div>
              <div className=''>
                <div>Message</div>
                <div className='flex gap-2 items-center'>
                  <h3 className='text-3xl'>8</h3>
                  <h3>/ 100</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='flex rounded-md items-center border-[1px] shadow-sm 
          sm:shadow-lg w-auto sm:pr-20 px-14 py-5'>
          <div className='flex items-center gap-4'>
            <div className='shadow-md border-[0.5px] p-2'>
              <BsFillEmojiLaughingFill className='text-2xl text-main'/>
            </div>
            <div className=''>
              <div>Chatbots</div>
              <div className='flex gap-2 items-center'>
                <h3 className='text-3xl'>1</h3>
                <h3>/ 1</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='flex rounded-md items-center border-[1px] shadow-sm
         sm:shadow-lg w-auto sm:pr-20 px-6 py-5'>
          <div className='flex items-center gap-4'>
            <div className='shadow-md border-[0.5px] p-2'>
              <FaLanguage className='text-2xl text-main'/>
            </div>
            <div className=''>
              <div>Characters</div>
              <div className='flex gap-2 items-center'>
                <h3 className='text-2xl'>26,066</h3>
                <h3 className='text-sm'>/ 500,000</h3>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* -----------------------------choose plan--------------- */}
        <div className='flex  sm:items-center sm:justify-center'>
          <div className='border-[1px] bg-gray-100 rounded-md flex justify-between items-center px-1 py-3 h-[7vh] mt-8 w-[16vw]'>
            <div onClick={()=>selectPlan()} className={`${plan==="yearly"? "px-6 py-2 rounded-md cursor-pointer":"bg-gray-700 text-white  px-6 py-2 rounded-md cursor-pointer"} text-sm`}><h3>Monthly</h3></div>
            <div onClick={()=>selectPlan()} className={`${plan==="yearly"? "bg-gray-700 text-white px-6 py-2 rounded-md cursor-pointer":"px-6 py-2 rounded-md cursor-pointer"} text-sm`}><h1>Yearly</h1></div>
          </div>
        </div>

        {/* -----------------------plan card----------------------------- */}
        <div className='flex flex-col sm:flex-row justify-between mt-10'>
          <div className='w-fit p-8 mb-10'>
            <div className='mb-5'>
              <h3 className='text-2xl'>Basic</h3>
              <h3 className='text-sm'>Perfect for personal use</h3>
            </div>
            <div className='flex items-center mb-4 gap-2'>
              <h3 className='text-4xl font-bold'>{`${plan==="monthly" ? "$39":"$390"}`}</h3>
              <h3 className='text-sm'>per<br></br>month</h3>
            </div>
            <div className='bg-slate-800 w-fit mb-2 text-white px-16 py-2 rounded-md'>
              <h3>Subscribe</h3>
            </div>
            <h3 className='text-sm'>This includes:</h3>
            <div className='gap-2 flex flex-col'>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>2.000 Messages</h3>
              </div>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>1 AI Bot</h3>
              </div>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>1 Seats for Live Chat</h3>
              </div>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>5M Character Data Import</h3>
              </div>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>Human Routing Options</h3>
              </div>
            </div>
          </div>
          <div className='border-[1px] shadow-xl bg-gray-100 rounded-xl w-fit p-7 sm:p-8 mb-10'>
          <span class="bg-green-100 animate-pulse text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Most Popular</span>
            <div className='mb-5'>
              <h3 className='text-2xl'>Pro</h3>
              <h3 className='text-sm'>Perfect for Small Businesses</h3>
            </div>
            <div className='flex items-center mb-4 gap-2'>
              <h3 className='text-4xl font-bold'>{`${plan==="monthly" ? "$89":"$890"}`}</h3>
              <h3 className='text-sm'>per<br></br>month</h3>
            </div>
            <div className='bg-slate-800 w-fit mb-2 text-white px-16 py-2 rounded-md'>
              <h3>Subscribe</h3>
            </div>
            <h3 className='text-sm'>This includes:</h3>
            <div className='gap-2 flex flex-col'>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>4.000 Messages</h3>
              </div>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>25 AI Bots</h3>
              </div>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>3 Seats for Live Chat</h3>
              </div>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>10M Character Data Import</h3>
              </div>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>Human Routing Options</h3>
              </div>
            </div>
          </div>
          <div className='w-fit p-8 mb-10'>
            <div className='mb-5'>
              <h3 className='text-2xl'>Expert</h3>
              <h3 className='text-sm'>Perfect for Experts</h3>
            </div>
            <div className='flex items-center mb-4 gap-2'>
              <h3 className='text-4xl font-bold'>{`${plan==="monthly" ? "$389":"$3,890"}`}</h3>
              <h3 className='text-sm'>per<br></br>month</h3>
            </div>
            <div className='bg-slate-800 w-fit mb-2 text-white px-16 py-2 rounded-md'>
              <h3>Subscribe</h3>
            </div>
            <h3 className='text-sm'>This includes:</h3>
            <div className='gap-2 flex flex-col'>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>8.000 Messages</h3>
              </div>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>50 AI Bots</h3>
              </div>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>6 Seats for Live Chat</h3>
              </div>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>20M Character Data Import</h3>
              </div>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>Human Routing Options</h3>
              </div>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>API Access</h3>
              </div>
              <div className='flex items-center gap-1'>
                <MdVerified/>
                <h3>Remove Branding</h3>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}
