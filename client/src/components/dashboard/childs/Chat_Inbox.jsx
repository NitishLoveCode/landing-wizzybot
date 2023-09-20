import React, { useState } from 'react'
import {CiVolumeHigh} from "react-icons/ci"
import {LuVolumeX} from "react-icons/lu"
import {AiOutlineSend} from "react-icons/ai"

export default function Chat_Inbox() {
  const [chatVolume, setchatVloume]=useState(true)

  const chatVolumeFun=()=>{
    console.log("clifdas")
    if(chatVolume===false){
      setchatVloume(true)
    }else{
      setchatVloume(false)
    }
  }

  return (
    <div className='sm:mx-5'>
      <div className='flex sm:flex-row flex-col items-center sm:items-start gap-1 border-[0.5px] p-2 border-gray-300 rounded-t-2xl justify-between'>
        <div className='flex items-center gap-2'>
          <div>
            <h3 className='text-[12px]'>Chatting with</h3>
          </div>
          <div>
            <h3 className='text-sm sm:text-xl'>NitishLoveCode@gmail.com</h3>
          </div>
          <div className='w-2 h-2 rounded-full bg-green-400'></div>
        </div>
        
        <div onClick={()=>chatVolumeFun()} className='flex items-center gap-2'>
          <div  className='border-[1px] border-gray-400 p-[3px] rounded-full cursor-pointer active:scale-95'>{chatVolume ? <CiVolumeHigh className='text-xl'/>:<LuVolumeX className='text-xl'/> }</div>
          <div className='bg-gray-700 active:scale-95 p-1 px-4 text-white rounded-md'><h3 className='text-[13px]'>End conversation</h3></div>
        </div>
      </div>

      <div className='mt-2 sm:mt-4 flex sm:flex-row flex-col gap-2'>
        <div className='w-full sm:w-[28vw] border-[1px] p-1 h-[80vh]'>
          <div className='bg-gray-100 mb-2 rounded-3xl flex items-center'>
            <input className='w-full bg-transparent h-10 outline-none px-2' placeholder='Search' type="text" name="search" id="" />
          </div>

          <div className='w-full gap-3 flex flex-col overflow-y-scroll h-[70vh]'>

              <div className='border-b-[1px] cursor-pointer active:scale-95 hover:bg-gray-100 pb-1 flex items-center'>
                <div className='w-14 min-w-14 h-14 min-h-14 rounded-full bg-gray-300'>
                </div>
                <div className='w-[80%] ml-2 flex flex-col'>
                  <div className='flex justify-between'>
                    <div><h3>Nitish kumar</h3></div>
                    <div><h3 className='text-sm'>1m ago</h3></div>
                  </div>
                  <div>
                    <h3 className='text-sm'>Hello, how are you?</h3>
                  </div>
                </div>
              </div>


              <div className='border-b-[1px] cursor-pointer active:scale-95 hover:bg-gray-100 pb-1 flex items-center'>
                <div className='w-14 min-w-14 h-14 min-h-14 rounded-full bg-gray-300'>
                </div>
                <div className='w-[80%] ml-2 flex flex-col'>
                  <div className='flex justify-between'>
                    <div><h3>Nitish kumar</h3></div>
                    <div><h3 className='text-sm'>1m ago</h3></div>
                  </div>
                  <div>
                    <h3 className='text-sm'>Hello, how are you?</h3>
                  </div>
                </div>
              </div>


              <div className='border-b-[1px] cursor-pointer active:scale-95 hover:bg-gray-100 pb-1 flex items-center'>
                <div className='w-14 min-w-14 h-14 min-h-14 rounded-full bg-gray-300'>
                </div>
                <div className='w-[80%] ml-2 flex flex-col'>
                  <div className='flex justify-between'>
                    <div><h3>Nitish kumar</h3></div>
                    <div><h3 className='text-sm'>1m ago</h3></div>
                  </div>
                  <div>
                    <h3 className='text-sm'>Hello, how are you?</h3>
                  </div>
                </div>
              </div>



              <div className='border-b-[1px] cursor-pointer active:scale-95 hover:bg-gray-100 pb-1 flex items-center'>
                <div className='w-14 min-w-14 h-14 min-h-14 rounded-full bg-gray-300'>
                </div>
                <div className='w-[80%] ml-2 flex flex-col'>
                  <div className='flex justify-between'>
                    <div><h3>Nitish kumar</h3></div>
                    <div><h3 className='text-sm'>1m ago</h3></div>
                  </div>
                  <div>
                    <h3 className='text-sm'>Hello, how are you?</h3>
                  </div>
                </div>
              </div>



              <div className='border-b-[1px] cursor-pointer active:scale-95 hover:bg-gray-100 pb-1 flex items-center'>
                <div className='w-14 min-w-14 h-14 min-h-14 rounded-full bg-gray-300'>
                </div>
                <div className='w-[80%] ml-2 flex flex-col'>
                  <div className='flex justify-between'>
                    <div><h3>Nitish kumar</h3></div>
                    <div><h3 className='text-sm'>1m ago</h3></div>
                  </div>
                  <div>
                    <h3 className='text-sm'>Hello, how are you?</h3>
                  </div>
                </div>
              </div>


              <div className='border-b-[1px] cursor-pointer active:scale-95 hover:bg-gray-100 pb-1 flex items-center'>
                <div className='w-14 min-w-14 h-14 min-h-14 rounded-full bg-gray-300'>
                </div>
                <div className='w-[80%] ml-2 flex flex-col'>
                  <div className='flex justify-between'>
                    <div><h3>Nitish kumar</h3></div>
                    <div><h3 className='text-sm'>1m ago</h3></div>
                  </div>
                  <div>
                    <h3 className='text-sm'>Hello, how are you?</h3>
                  </div>
                </div>
              </div>



              <div className='border-b-[1px] cursor-pointer active:scale-95 hover:bg-gray-100 pb-1 flex items-center'>
                <div className='w-14 min-w-14 h-14 min-h-14 rounded-full bg-gray-300'>
                </div>
                <div className='w-[80%] ml-2 flex flex-col'>
                  <div className='flex justify-between'>
                    <div><h3>Nitish kumar</h3></div>
                    <div><h3 className='text-sm'>1m ago</h3></div>
                  </div>
                  <div>
                    <h3 className='text-sm'>Hello, how are you?</h3>
                  </div>
                </div>
              </div>


              <div className='border-b-[1px] cursor-pointer active:scale-95 hover:bg-gray-100 pb-1 flex items-center'>
                <div className='w-14 min-w-14 h-14 min-h-14 rounded-full bg-gray-300'>
                </div>
                <div className='w-[80%] ml-2 flex flex-col'>
                  <div className='flex justify-between'>
                    <div><h3>Nitish kumar</h3></div>
                    <div><h3 className='text-sm'>1m ago</h3></div>
                  </div>
                  <div>
                    <h3 className='text-sm'>Hello, how are you?</h3>
                  </div>
                </div>
              </div>



              <div className='border-b-[1px] cursor-pointer active:scale-95 hover:bg-gray-100 pb-1 flex items-center'>
                <div className='w-14 min-w-14 h-14 min-h-14 rounded-full bg-gray-300'>
                </div>
                <div className='w-[80%] ml-2 flex flex-col'>
                  <div className='flex justify-between'>
                    <div><h3>Nitish kumar</h3></div>
                    <div><h3 className='text-sm'>1m ago</h3></div>
                  </div>
                  <div>
                    <h3 className='text-sm'>Hello, how are you?</h3>
                  </div>
                </div>
              </div>



              <div className='border-b-[1px] cursor-pointer active:scale-95 hover:bg-gray-100 pb-1 flex items-center'>
                <div className='w-14 min-w-14 h-14 min-h-14 rounded-full bg-gray-300'>
                </div>
                <div className='w-[80%] ml-2 flex flex-col'>
                  <div className='flex justify-between'>
                    <div><h3>Nitish kumar</h3></div>
                    <div><h3 className='text-sm'>1m ago</h3></div>
                  </div>
                  <div>
                    <h3 className='text-sm'>Hello, how are you?</h3>
                  </div>
                </div>
              </div>



              <div className='border-b-[1px] cursor-pointer active:scale-95 hover:bg-gray-100 pb-1 flex items-center'>
                <div className='w-14 min-w-14 h-14 min-h-14 rounded-full bg-gray-300'>
                </div>
                <div className='w-[80%] ml-2 flex flex-col'>
                  <div className='flex justify-between'>
                    <div><h3>Nitish kumar</h3></div>
                    <div><h3 className='text-sm'>1m ago</h3></div>
                  </div>
                  <div>
                    <h3 className='text-sm'>Hello, how are you?</h3>
                  </div>
                </div>
              </div>



              <div className='border-b-[1px] cursor-pointer active:scale-95 hover:bg-gray-100 pb-1 flex items-center'>
                <div className='w-14 min-w-14 h-14 min-h-14 rounded-full bg-gray-300'>
                </div>
                <div className='w-[80%] ml-2 flex flex-col'>
                  <div className='flex justify-between'>
                    <div><h3>Nitish kumar</h3></div>
                    <div><h3 className='text-sm'>1m ago</h3></div>
                  </div>
                  <div>
                    <h3 className='text-sm'>Hello, how are you?</h3>
                  </div>
                </div>
              </div>


              <div className='border-b-[1px] cursor-pointer active:scale-95 hover:bg-gray-100 pb-1 flex items-center'>
                <div className='w-14 min-w-14 h-14 min-h-14 rounded-full bg-gray-300'>
                </div>
                <div className='w-[80%] ml-2 flex flex-col'>
                  <div className='flex justify-between'>
                    <div><h3>Nitish kumar</h3></div>
                    <div><h3 className='text-sm'>1m ago</h3></div>
                  </div>
                  <div>
                    <h3 className='text-sm'>Hello, how are you?</h3>
                  </div>
                </div>
              </div>
              

              

              



          </div>
        </div>


        {/* ----------------middle card for message------------------------- */}
        <div className='w-full'>
        <div className='sticky top-0 '>
          <div className=' relative border-[1px] shadow-xl overflow-hidden
            border-gray-300 h-[80vh]'>
              <div className="bg-gray-200 px-2 py-2 flex items-center gap-2">
                <div className='w-12 min-w-12 h-12 min-h-12 rounded-full bg-gray-400'>
                </div>
                <div><h3>Nitish kumar</h3></div>
              </div>
    
              {/* --------------------message --------------- */}
              <div className='px-4 mt-4 pb-4 h-[72%] overflow-y-scroll'>
                <div className='flex flex-col gap-4'>
    
                  {/* -----------------send--------------- */}
                  <div className='flex justify-end'>
                    <div className='bg-[#2188f3] mt-4 text-white w-fit px-2 rounded-md'>
                      <h3>Lets jump on a video call.</h3>
                    </div>
                  </div>
                  {/* ----------------------------------------------------- */}
    
                  {/* -----------------reply--------------- */}
                  <div className='flex justify-start'>
                    <div className='bg-[#f4f5f6] mt-4 w-fit px-2 rounded-md'>
                      <h3>How often should i take the medicine?</h3>
                    </div>
                  </div>
                  {/* ----------------------------------------------------- */}
    
                  {/* -----------------send--------------- */}
                  <div className='flex justify-end'>
                    <div className='bg-[#2188f3] mt-4 text-white w-fit px-2 rounded-md'>
                      <h3>Twice a day, at breakfast and before bed</h3>
                    </div>
                  </div>
                  {/* ----------------------------------------------------- */}
    
                  {/* -----------------reply--------------- */}
                  <div className='flex justify-start'>
                    <div className='bg-[#f4f5f6] mt-4 w-fit px-2 rounded-md'>
                      <h3>Thanks a lot doc</h3>
                    </div>
                  </div>
                  {/* ----------------------------------------------------- */}
    
                  {/* -----------------send--------------- */}
                  <div className='flex justify-end'>
                    <div className='bg-[#2188f3] mt-4 text-white w-fit px-2 rounded-md'>
                      <h3>Thats my duty, mention not</h3>
                    </div>
                  </div>
                  {/* ----------------------------------------------------- */}
    
                  {/* -----------------reply--------------- */}
                  <div className='flex justify-start'>
                    <div className='bg-[#f4f5f6] mt-4 w-fit px-2 rounded-md'>
                      <h3>sorry to bother again but can i ask you one more favour?</h3>
                    </div>
                  </div>
                  {/* ----------------------------------------------------- */}
    
                  {/* -----------------send--------------- */}
                  <div className='flex justify-end'>
                    <div className='bg-[#2188f3] mt-4 text-white w-fit px-2 rounded-md'>
                      <h3>yeah sure, go ahead?</h3>
                    </div>
                  </div>
                  {/* ----------------------------------------------------- */}
    
                  {/* -----------------reply--------------- */}
                  <div className='flex justify-start'>
                    <div className='bg-[#f4f5f6] mt-4 w-fit px-2 rounded-md'>
                      <h3>I really had a scary feeling about this, can please advice some tricks to overcome my anxiety?</h3>
                    </div>
                  </div>
                  {/* ----------------------------------------------------- */}
              </div>
              </div>
              {/* ------------------------------------------- */}
    
              <div className='absolute bg-white bottom-0 w-full'>
                <div className='border-[1px] border-gray-300 h-14 px-2 flex items-center'>
                  <input className='outline-none w-full' type="text" name="message" placeholder='Send message'/>
                  <AiOutlineSend className='pl-2 text-4xl'/>
                </div>
              </div>
          </div>
    
          </div>
        </div>

        {/* -------------------Right sectation card-------------- */}
        {/* <div className='w-[25vw]'>
          <div className='p-2'>
            <h3 className='text-xl'>Details</h3>
          </div>
          <div className='border-[1px] h-[73.5vh] rounded-md'>

          </div>
        </div> */}
      </div>
      
    </div>
  )
}
