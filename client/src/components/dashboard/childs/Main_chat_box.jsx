import React, { useState } from 'react'
import { AiOutlineSend } from "react-icons/ai"
import ChatBubble from '../../shared_components/ChatBubble';

export default function Main_chat_box({ AI_Bot_color, Message_color, User_message_color, Initial_Message }) {

  
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      body: Initial_Message
    },
    {
      sender: 'user',
      body: 'Dummy user message'
    },
    {
      sender: 'bot',
      body: 'Dummy bot message'
    },

  ]);

  return (
    <>
      {/* ----------------right side chat------------- */}
      <div className='sticky top-0 h-screen'>
        <div className=' relative border-[1px] shadow-xl overflow-hidden rounded-3xl border-gray-300 w-full sm:w-[28vw] h-[80vh]'>
          <div style={{ backgroundColor: AI_Bot_color }} className={"px-2 py-2"}>
            <img className='h-10' src="https://app.livechatai.com/_next/static/media/logo-white.94898d4d.png" alt="logo" />
          </div>

          {/* --------------------message --------------- */}
          <div className='px-4 mt-4 pb-4 h-[72%] overflow-y-scroll'>
            <div className='flex flex-col gap-4'>

              {/* ----------------------------------------------------- */}
              {messages.map((message, index) => {
                return <ChatBubble message={message} key={index} userColor={User_message_color} botColor={Message_color}/>
              })}

            </div>
          </div>
          {/* ------------------------------------------- */}

          <div className='absolute bg-white bottom-0 w-full'>
            <div className='border-[1px] h-14  px-2 mb-4 flex items-center'>
              <input className='outline-none w-full' type="text" name="message" placeholder='Send message' />
              <AiOutlineSend className='pl-2 text-4xl' />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
