import React from 'react'
import {AiOutlineDelete} from "react-icons/ai"
import {FiEdit2} from "react-icons/fi"
import {BiTime} from "react-icons/bi"
import {AiOutlineSetting} from "react-icons/ai"
import {BiFilterAlt} from "react-icons/bi"

export default function Home() {
  return (
    <>
        <div className='mx-10'>
            <div className='flex justify-between mb-8'>
                <div>
                    <h3 className='text-4xl font-bold'>Dashboard</h3>
                </div>
                <div className='bg-gray-900 text-white items-center cursor-pointer justify-center flex px-8 rounded-md active:scale-95'>
                    <h3>New Ai Bot</h3>
                </div>
            </div>
            <div className='w-[50vw] rounded-md border-[1px] border-gray-400 h-fit'>
                <div className='flex py-2 px-4 bg-gray-100 rounded-t-md items-center justify-between'>
                    <div><h3 className='text-xl font-semibold'>studyloverveer.in</h3></div>
                    <div><AiOutlineDelete className='text-2xl hover:text-red-500 cursor-pointer active:scale-95'/></div>
                </div>
                <div className='flex justify-around mt-8'>
                    <div className='flex flex-col items-center'>
                        <div><h3 className='text-3xl'>6</h3></div>
                        <div><h3>Messages</h3></div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div><h3 className='text-3xl'>6</h3></div>
                        <div><h3>Conversations</h3></div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div><h3 className='text-3xl'>6</h3></div>
                        <div><h3>Resolutions</h3></div>
                    </div>
                </div>
                <div className='flex justify-around my-8'>
                    <div className='flex cursor-pointer active:scale-95 items-center gap-2'>
                        <FiEdit2/>
                        <h3>CUSTOMIZE</h3>
                    </div>
                    <div className='flex cursor-pointer active:scale-95 items-center gap-2'>
                        <BiFilterAlt/>
                        <h3>DATA SOURCE</h3>
                    </div>
                    <div className='flex cursor-pointer active:scale-95 items-center gap-2'>
                        <BiTime/>
                        <h3>INBOX</h3>
                    </div>
                    <div className='flex cursor-pointer active:scale-95 items-center gap-2'>
                        <AiOutlineSetting/>
                        <h3>SETTINGS</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
