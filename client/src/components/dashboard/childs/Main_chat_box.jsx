import React from 'react'
import {AiOutlineSend} from "react-icons/ai"

export default function Main_chat_box({AI_Bot_color,Message_color,User_message_color}) {
  return (
    <>
        {/* ----------------right side chat------------- */}
        <div className='sticky top-0 h-screen'>
        <div className=' relative border-[1px] shadow-xl overflow-hidden rounded-3xl border-gray-300 w-full sm:w-[28vw] h-[80vh]'>
            <div style={{ backgroundColor: AI_Bot_color }} className={ "px-2 py-2"}>
              <img className='h-10' src="https://app.livechatai.com/_next/static/media/logo-white.94898d4d.png" alt="logo" />
            </div>

            {/* --------------------message --------------- */}
            <div className='px-4 mt-4 pb-4 h-[72%] overflow-y-scroll'>
              <div className='flex flex-col gap-4'>

                {/* -----------------send--------------- */}
                <div className='flex justify-end'>
                  <div style={{ backgroundColor: User_message_color }} className='mt-4 text-white w-fit px-2 rounded-md'>
                    <h3>Lets jump on a video call.</h3>
                  </div>
                </div>
                {/* ----------------------------------------------------- */}

                {/* -----------------reply--------------- */}
                <div className='flex justify-start'>
                  <div style={{ backgroundColor: Message_color }} className='mt-4 w-fit px-2 rounded-md'>
                    <h3>How often should i take the medicine?</h3>
                  </div>
                </div>
                {/* ----------------------------------------------------- */}

                {/* -----------------send--------------- */}
                <div className='flex justify-end'>
                  <div style={{ backgroundColor: User_message_color }} className='mt-4 text-white w-fit px-2 rounded-md'>
                    <h3>Twice a day, at breakfast and before bed</h3>
                  </div>
                </div>
                {/* ----------------------------------------------------- */}

                {/* -----------------reply--------------- */}
                <div className='flex justify-start'>
                  <div style={{ backgroundColor: Message_color }} className='mt-4 w-fit px-2 rounded-md'>
                    <h3>Thanks a lot doc</h3>
                  </div>
                </div>
                {/* ----------------------------------------------------- */}

                {/* -----------------send--------------- */}
                <div className='flex justify-end'>
                  <div style={{ backgroundColor: User_message_color }} className='mt-4 text-white w-fit px-2 rounded-md'>
                    <h3>Thats my duty, mention not</h3>
                  </div>
                </div>
                {/* ----------------------------------------------------- */}

                {/* -----------------reply--------------- */}
                <div className='flex justify-start'>
                  <div style={{ backgroundColor: Message_color }} className='mt-4 w-fit px-2 rounded-md'>
                    <h3>sorry to bother again but can i ask you one more favour?</h3>
                  </div>
                </div>
                {/* ----------------------------------------------------- */}

                {/* -----------------send--------------- */}
                <div className='flex justify-end'>
                  <div style={{ backgroundColor: User_message_color }} className='mt-4 text-white w-fit px-2 rounded-md'>
                    <h3>yeah sure, go ahead?</h3>
                  </div>
                </div>
                {/* ----------------------------------------------------- */}

                {/* -----------------reply--------------- */}
                <div className='flex justify-start'>
                  <div style={{ backgroundColor: Message_color }} className='mt-4 w-fit px-2 rounded-md'>
                    <h3>I really had a scary feeling about this, can please advice some tricks to overcome my anxiety?</h3>
                  </div>
                </div>
                {/* ----------------------------------------------------- */}
            </div>
            </div>
            {/* ------------------------------------------- */}

            <div className='absolute bg-white bottom-0 w-full'>
              <div className='border-[1px] h-14  px-2 mb-4 flex items-center'>
                <input className='outline-none w-full' type="text" name="message" placeholder='Send message'/>
                <AiOutlineSend className='pl-2 text-4xl'/>
              </div>
            </div>
        </div>

        </div>
    </>
  )
}
