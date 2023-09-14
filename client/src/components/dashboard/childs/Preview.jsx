import React from 'react'
import Button from '../../shared_components/Button'
import {FiSend} from "react-icons/fi"


export default function Preview() {
  return (
    <>
        <div className='relative overflow-hidden border-2 border-main mb-4 rounded-xl h-[75vh]'>
            <div className='flex  p-2 bg-main gap-2 items-center'>
                <div>
                    <img className='w-10' src="https://app.livechatai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.99eba397.png&w=48&q=75" alt="logo" />
                </div>
                <div>
                    <h3 className='text-xl text-white'>WizzyBot</h3>
                </div>
            </div>

            <div className='h-full bg-m overflow-y-scroll'>

                <div className='m-5 flex flex-col justify-between'>
                {/* ----------------message, you can write map function------------ */}

                    {/* -----left message------ */}
                    <div className='bg-white h-fit p-1 rounded-md'>
                        <h3>Hello, how can i help you?</h3>
                    </div>
                    {/* -------right messaage-------- */}
                    <div className='mt-16 bg-[#d9fdd3] h-fit p-1 rounded-md'>
                        <h3>hmmm, i don't need help :)</h3>
                    </div>

                    <div className='bg-white h-fit p-1 rounded-md'>
                        <h3>Hello, how can i help you?</h3>
                    </div>
                    {/* -------right messaage-------- */}
                    <div className='mt-16 bg-[#d9fdd3] h-fit p-1 rounded-md'>
                        <h3>hmmm, i don't need help :)</h3>
                    </div>

                    <div className='bg-white h-fit p-1 rounded-md'>
                        <h3>Hello, how can i help you?</h3>
                    </div>
                    {/* -------right messaage-------- */}
                    <div className='mt-16 bg-[#d9fdd3] h-fit p-1 rounded-md'>
                        <h3>hmmm, i don't need help :)</h3>
                    </div>

                    <div className='bg-white h-fit p-1 rounded-md'>
                        <h3>Hello, how can i help you?</h3>
                    </div>
                    {/* -------right messaage-------- */}
                    <div className='mt-16 bg-[#d9fdd3] h-fit p-1 rounded-md'>
                        <h3>hmmm, i don't need help :)</h3>
                    </div>
                    <div className='bg-white h-fit p-1 rounded-md'>
                        <h3>Hello, how can i help you?</h3>
                    </div>
                    {/* -------right messaage-------- */}
                    <div className='mt-16 bg-[#d9fdd3] h-fit p-1 rounded-md'>
                        <h3>hmmm, i don't need help :)</h3>
                    </div>
                    <div className='bg-white h-fit p-1 rounded-md'>
                        <h3>Hello, how can i help you?</h3>
                    </div>
                    {/* -------right messaage-------- */}
                    <div className='mt-16 bg-[#d9fdd3] h-fit p-1 rounded-md'>
                        <h3>hmmm, i don't need help :)</h3>
                    </div>
                    <div className='bg-white h-fit p-1 rounded-md'>
                        <h3>Hello, how can i help you?</h3>
                    </div>
                    {/* -------right messaage-------- */}
                    <div className='mt-16 bg-[#d9fdd3] h-fit p-1 rounded-md'>
                        <h3>hmmm, i don't need help :)</h3>
                    </div>
                    <div className='bg-white h-fit p-1 rounded-md'>
                        <h3>Hello, how can i help you?</h3>
                    </div>
                    {/* -------right messaage-------- */}
                    <div className='mt-16 bg-[#d9fdd3] h-fit p-1 rounded-md'>
                        <h3>hmmm, i don't need help :)</h3>
                    </div>
                    <div className='bg-white h-fit p-1 rounded-md'>
                        <h3>Hello, how can i help you?</h3>
                    </div>
                    {/* -------right messaage-------- */}
                    <div className='mt-16 bg-[#d9fdd3] h-fit p-1 rounded-md'>
                        <h3>hmmm, i don't need help :)</h3>
                    </div>
                    <div className='bg-white h-fit p-1 rounded-md'>
                        <h3>Hello, how can i help you?</h3>
                    </div>
                    {/* -------right messaage-------- */}
                    <div className='mt-16 bg-[#d9fdd3] h-fit p-1 rounded-md'>
                        <h3>hmmm, i don't need help :)</h3>
                    </div>
                    <div className='bg-white h-fit p-1 rounded-md'>
                        <h3>Hello, how can i help you?</h3>
                    </div>
                    {/* -------right messaage-------- */}
                    <div className='mt-16 bg-[#d9fdd3] h-fit p-1 rounded-md'>
                        <h3>hmmm, i don't need help :)</h3>
                    </div>
                    <div className='bg-white h-fit p-1 rounded-md'>
                        <h3>Hello, how can i help you?</h3>
                    </div>
                    {/* -------right messaage-------- */}
                    <div className='mt-16 bg-[#d9fdd3] h-fit p-1 rounded-md'>
                        <h3>hmmm, i don't need help :)</h3>
                    </div>

                {/* --------------message, box end--------------------------- */}
                </div>
            </div>


            <div className='absolute bg-main pt-2 pb-2 w-full bottom-0'>
                <div className='flex gap-2 justify-center items-center'>
                    <input className='w-[80%] outline-none h-9 rounded-sm p-2' type="text" name="message" placeholder='Send message'/>
                    <Button style={"bg-white p-1 rounded-sm active:scale-95 h-8 pl-8 pr-8 text-xl text-main"} text={<FiSend/>}/>
                </div>
            </div>
        </div>
    </>
  )
}
