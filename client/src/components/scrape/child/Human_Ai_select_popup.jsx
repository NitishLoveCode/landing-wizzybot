import React, { useState } from 'react'
import Button from '../../shared_components/Button';

export default function Human_Ai_select_popup() {
    // --------------swith for human sopport------------------
    const [swith, setswitch]=useState(true);


    // ------------function for on off human and ai chat---- 
    const human_ai_mode=()=>{
        if(swith==true){
            setswitch(false)
        }else{
            setswitch(true)
        }
    }

  return (
    <>
        <div className='absolute overflow-y-hidden top-0 bg-opacity-90 bg-gray-600 w-full h-full'>
            <div className='flex relative shadow-md rounded-md overflow-hidden ml-auto mr-auto mt-14 w-[37vw] h-[85vh] bg-white'>
                <div className='w-[50%] h-[70%] bg-gradient-to-r from-green-50 to-white'></div>
                
                <div className='flex z-30 absolute flex-col w-full items-center p-5'>
                    {/* -------------top animation code here------------------ */}
                        <div className='w-40 h-24 bg-gray-200'>
                            <p>Header animation will take a longer time, we i'll do it later on.</p>
                        </div>
                    {/* --------------animation code end here------------------------ */}
                    <div className='flex text-xl flex-col justify-center items-center'>
                        <h3>Would you like to activate human</h3>
                        <h3>supported live chat into your AI bot?</h3>
                    </div>
                    <div className='flex text-sm mt-2 flex-col justify-center items-center'>
                        <p>You can always change your preferences through theSettings section with</p>
                        <p>the <span className='font-semibold text-gray-400'>"Human Support Live Chat Settings"</span> tab.</p>
                        <p className='text-[14px] mt-4 underline'>How AI bot and human-support live chat works together?</p>
                    </div>
                    <div className='flex justify-between w-full mt-8'>
                        <div className='w-56 justify-center flex flex-col bg-blue-100 rounded-md h-32 border-2 border-blue-300'>
                            <div className='flex flex-col justify-center items-center w-full'>
                                <img className='w-10 h-10' src="https://app.livechatai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.99eba397.png&w=48&q=75" alt="logo" />
                                <h3>Ai Bot</h3>
                                <div className='flex items-center justify-center gap-1 bg-blue-200 text-main pl-2 pr-2 rounded-xl'>
                                    <div className='w-2 h-2 rounded-full bg-main'></div>
                                    <button className='text-sm'>Activated</button>
                                </div>
                            </div>
                        </div>
                        <div className='w-56 flex justify-center items-center rounded-md h-32 border-2'>
                            <div className='flex flex-col justify-center items-center w-full'>
                                <img className='w-10 h-10' src="https://app.livechatai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.99eba397.png&w=48&q=75" alt="logo" />
                                <h3>Human-Support Live Chat</h3>swith
                                <div onClick={()=>human_ai_mode()} className='flex gap-1 bg-blue-200 text-main w-12 p-[3px] cursor-pointer rounded-xl'>
                                    <div className={`${swith? "ml-[25px]":""} w-4 h-4 rounded-full bg-main`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <Button style={"bg-gray-800 text-white p-3 pl-40 pr-40 rounded-xl active:scale-95"} text={"Create My AI Bot"}/>
                    </div> 
                </div>  
            </div>
        </div>
    </>
  )
}


