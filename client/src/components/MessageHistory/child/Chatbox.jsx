import React, { useState } from 'react'
import { AiOutlineSend } from "react-icons/ai"
import ChatBubble from '../../shared_components/ChatBubble';

export default function Chatbox({ AI_Bot_color, Message_color, User_message_color, messages }) {

  

  return (
    <>
      {/* ----------------right side chat------------- */}
      <div className='h-screen mt-20'>
        <div className=' relative border-[1px] shadow-xl  rounded-3xl border-gray-300 w-full sm:w-[28vw] h-[80vh]'>
          <div style={{ backgroundColor: AI_Bot_color }} className={"px-2 py-2 h-14 rounded-t-3xl"}>
            {/* <img className='h-10' src="https://app.livechatai.com/_next/static/media/logo-white.94898d4d.png" alt="logo" /> */}
          </div>

          {/* --------------------message --------------- */}
            <div className='flex flex-col gap-4 overflow-y-scroll px-4  pb-4 h-[90%] '>

              {/* ----------------------------------------------------- */}
              {messages.map((message, index) => {
                return <ChatBubble message={message} key={index} userColor={User_message_color} botColor={Message_color}/>
              })}

            </div>
          {/* ------------------------------------------- */}

      
        </div>

      </div>
    </>
  )
}
