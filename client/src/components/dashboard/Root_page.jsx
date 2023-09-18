import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Preview from './childs/Preview'
import Settings from './childs/Settings'
import Customize from './childs/Customize'
import Embed_and_Share from './childs/Embed_and_Share'
import Chat_Inbox from './childs/Chat_Inbox'
import Manage_Data_Sources from './childs/Manage_Data_Sources'

import {BsFillEyeFill} from "react-icons/bs"
import {AiFillSetting} from "react-icons/ai"
import {BsPencil} from "react-icons/bs"
import {ImEmbed2} from "react-icons/im"
import {BsChatLeftText} from "react-icons/bs"
import {BsDatabaseAdd} from "react-icons/bs"
import serverBasePath from '../../../constants'

export default function Root_page() {
    const location =useLocation()
    const {id} = useParams();



  return (
    <>
        <div className='ml-2 mr-2 sm:ml-24 pb-8 sm:mr-24 mt-10 gap-4 flex flex-col'>
            <div>
                <h3 className='text-3xl pl-1 font-bold text-gray-800'>wizzyBot.com</h3>
            </div>

            <div className='flex justify-center border-b pb-3 items-center flex-col w-full'>
                
                <div className='flex flex-wrap gap-2 p-1 justify-between w-full'>
                    <Link to={`/chatbot/preview/${id}`}>
                    <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                        <div>
                            <BsFillEyeFill className='text-2xl'/>
                        </div>
                        <div>
                            <h3>Preview</h3>
                        </div>
                    </div>
                    </Link>
                    <Link to={`/chatbot/settings/${id}`}>
                    <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                        <div>
                            <AiFillSetting className='text-2xl'/>
                        </div>
                        <div>
                            <h3>Settings</h3>
                        </div>
                    </div>
                    </Link>
                    <Link to={`/chatbot/customize/${id}`}>
                    <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                        <div>
                            <BsPencil className='text-2xl'/>
                        </div>
                        <div>
                            <h3>Customize</h3>
                        </div>
                    </div>
                    </Link>
                    <Link to={`/chatbot/embed-and-Share/${id}`}>
                    <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                        <div>
                            <ImEmbed2 className='text-2xl'/>
                        </div>
                        <div>
                            <h3>Embed & Share</h3>
                        </div>
                    </div>
                    </Link>
                    <Link to={`/chatbot/chat-inbox/${id}`}>
                    <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                        <div>
                            <BsChatLeftText className='text-2xl'/>
                        </div>
                        <div>
                            <h3>Chat Inbox</h3>
                        </div>
                    </div>
                    </Link>
                    <Link to={`/chatbot/manage_data_sources/${id}`}>
                    <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                        <div>
                            <BsDatabaseAdd className='text-2xl'/>
                        </div>
                        <div>
                            <h3>Manage Data Sources</h3>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>


        <div className='ml-2 mr-2 sm:ml-20 sm:mr-20'>

        {
            location.pathname ===`/chatbot/preview/${id}`? <Preview/>:""
        }
        {
            location.pathname ===`/chatbot/settings/${id}`? <Settings/>:""
        }
        {
            location.pathname ===`/chatbot/customize/${id}`? <Customize/>:""
        }
        {
            location.pathname ===`/chatbot/embed-and-Share/${id}`? <Embed_and_Share/>:""
        }
        {
            location.pathname ===`/chatbot/chat-inbox/${id}`? <Chat_Inbox/>:""
        }
        {
            location.pathname ===`/chatbot/manage_data_sources/${id}`? <Manage_Data_Sources/>:""
        }

        </div>
    </>
  )
}
