import React, { useState } from 'react'
import {AiOutlineArrowDown} from "react-icons/ai"
import Button from '../../shared_components/Button'
import {BiUser} from "react-icons/bi"
import {BiMessageRoundedDots} from "react-icons/bi"

export default function Settings() {
  const [ai_profile, setai_profile]=useState(false)
  const [human_support, sethuman_support]=useState(true)

  // -------human live sopport switch---
  const [live_support, setlive_support] = useState(false)



  // -----------fuction for human live sopport switch------------
  const forLiveSupprort=()=>{
    if(live_support==false){
      setlive_support(true)
    }else{
      setlive_support(false)
    }
  }


  // -----------------------open card-----------
  const open_Card=(card_name)=>{
    if(card_name=="ai_profile"){
      if(ai_profile==false){
        setai_profile(true)
      }else{
        setai_profile(false)
      }
    }
    if(card_name=="human_sopport"){
      if(human_support==true){
        sethuman_support(false)
      }else{
        sethuman_support(true)
      }
    }
  }

  return (
    <> 
        <div className='flex sm:flex-row flex-col w-full gap-4'>
          <div className='w-full sm:w-[70%] gap-8 flex flex-col'>
            {
              ai_profile? <>
              <div onClick={()=>open_Card("ai_profile")} className='flex rounded-md cursor-pointer 
                w-full justify-between pl-4 pr-4 h-10 bg-gray-300 items-center'>
                <div className='w-full'>
                  <h3>AI Profile & GPT Settings</h3>
                </div>
                <div>
                  <AiOutlineArrowDown/>
                </div>
              </div>
              </>:
              <>
              <div className='flex mb-10 flex-col rounded-md cursor-pointer w-full justify-between
                h-fit py-2 border-[1px] gap-2'>
                <div onClick={()=>open_Card("ai_profile")} className='flex pr-4 justify-between w-full border-b-[1px] pb-1'>
                  <div className=' w-[60%]'>
                    <h3 className='pl-4'>AI Profile & GPT Settings</h3>
                  </div>
                  <div>
                    <AiOutlineArrowDown/>
                  </div>
                </div>

                <div className='pl-4 pr-4'>
                  <div className='flex flex-col gap-2 justify-start'>
                    <h3>AI Bot Name</h3>
                    <input className='border-2 h-8 outline-none pl-2' type="text" name="site" value={"studyloverveer.in"}/>
                    <div>
                      <h3>Base Prompt</h3>
                      <div className='border-[2px] hover:border-main p-1 rounded-md '>
                        <h3>You are an intelligent conversational assistant named "Assistant". Your primary job is to provide accurate and helpful answers to questions from the user you are interacting with. You're skilled at handling multi-turn conversations and you're capable of asking clarifying questions if the user's query is unclear.
                          When answering, you should only provide responses that can be determined from the context provided or the conversation summary. If the answer isn't included in the context, respond politely with, "I am sorry, but based on the context available, I can not provide a certain answer."</h3>
                      </div>
                      <h3 className='text-[13px]'>Changing the AI base prompt is an advanced setting. If you do not know about AI profiles, do not exchange them. As LiveChatAI, we have already prepared the base prompt for you in the most ideal way.</h3>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <h3>GPT Model</h3>
                      <select className='border-2 h-8 w-full'>
                        <option value="chat-1">Chat-1</option>
                        <option value="chat-2">Chat-2</option>
                      </select>
                      <p className='text-[13px]'>1 message using gpt-3.5-turbo costs 1 message credit. 1 message using gpt-4 costs 20 message credits.</p>
                    </div>
                    <div className='flex flex-col'>
                      <h3 className='text-xl'>Temperature</h3>
                      <input className='p-2 border-2 h-8' type="number" name="temp" value={"2.5"}/>
                    </div>
                    <h3 className='text-[13px]'>Adjust the 'temperature' to fine-tune the balance between creativity and coherence in the AI's responses. A higher temperature encourages the AI to generate more diverse and creative output, but it may also introduce randomness and reduce focus. A lower temperature, on the other hand, prompts the AI to produce more deterministic and focused responses, potentially at the cost of creativity and novelty.</h3>
                  </div>
                  <div className='flex mt-8 justify-end gap-8 mr-10'>
                    <Button style={"border-[1px] active:scale-95 rounded-md border-gray-800 p-1 w-24"} text={"Cancel"}/>
                    <Button style={"rounded-md active:scale-95 bg-gray-900 text-white border-gray-800 border-[1px] p-1 w-24"} text={"Save"}/>
                  </div>
                </div>

              </div>
              </>
            }




            {
              human_support? <>
              <div onClick={()=>open_Card("human_sopport")} className='flex rounded-md cursor-pointer 
              w-full justify-between pl-4 pr-4 h-10 bg-gray-300 items-center'>
                <div className='w-full'>
                  <h3>Human Support Live Chat Settings</h3>
                </div>
                <div>
                  <AiOutlineArrowDown/>
                </div>
              </div>
              </>:
              <>
              <div className='flex mb-20 flex-col rounded-md cursor-pointer w-full justify-between
                h-fit py-2 border-[1px] gap-2'>
                <div onClick={()=>open_Card("human_sopport")} className='flex pr-4 justify-between w-full border-b-[1px] pb-1'>
                  <div className=' w-[60%]'>
                    <h3 className='pl-4'>Human Support Live Chat Settings</h3>
                  </div>
                  <div>
                    <AiOutlineArrowDown/>
                  </div>
                </div>

                <div className='pl-4 pr-4'>
                  <div className='flex flex-col gap-2 justify-start'>
                    <h3>Immediate Assistance from Human Agents Directly in the Chat Inbox</h3>
                    <h3 className='text-[13px]'>
                    Enable this feature to connect your customers directly with human support agents through the live chat interface. Perfect for providing real-time assistance, this setting ensures that customers can instantly reach a human representative within the chat window on your website. It's like having a support agent standing by, ready to assist at any moment.</h3>
                  </div>
                  <div className='mt-6'>
                    <div onClick={()=>forLiveSupprort()} className='border-[1px] flex items-center border-gray-500 rounded-full w-16 h-7'>
                      <div className={`${live_support ? "ml-[35px]":"ml-[4px]"} w-6 rounded-full h-6 bg-main`}></div>
                    </div>
                  </div>
                  <div className='flex mt-8 justify-end gap-8 mr-10'>
                    <Button style={"border-[1px] active:scale-95 rounded-md border-gray-800 p-1 w-24"} text={"Cancel"}/>
                    <Button style={"rounded-md active:scale-95 bg-gray-900 text-white border-gray-800 border-[1px] p-1 w-24"} text={"Save"}/>
                  </div>
                </div>

              </div>
              </>
            }


          </div>

          <div className='w-full sm:w-[30%]'>
              <div>
                <h1 className='text-xl'>About Your AI Bot</h1>
              </div>

              <div className='w-full gap-2 bg-green-50 flex items-center p-4 border-[1px] h-20 mt-4 rounded-md'>
                <div className='bg-main p-2 rounded-full'>
                  <BiUser className='text-3xl text-white'/>
                </div>
                <div>
                  <div><h3>AI Bot ID</h3></div>
                  <div><h3>clmbvu6kc0001l20f97fmho7y</h3></div>
                </div>
              </div>

              <div className='w-full gap-2 bg-green-50 flex items-center p-4 border-[1px] h-20 mt-4 rounded-md'>
                <div className='bg-yellow-400 p-2 rounded-full'>
                  <BiMessageRoundedDots className='text-3xl text-white'/>
                </div>
                <div>
                  <div><h3>Total Character</h3></div>
                  <div><h3>22391</h3></div>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}
