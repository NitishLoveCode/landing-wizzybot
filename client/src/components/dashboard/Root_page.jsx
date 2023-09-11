import React from 'react'
import { Link, useLocation } from 'react-router-dom'
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

export default function Root_page() {
    const location =useLocation()
    console.log(location.pathname)
  return (
    <>
        <div className='ml-24 mr-24 mt-10 gap-4 flex flex-col'>
            <div>
                <h3 className='text-3xl font-bold text-gray-800'>wizzyBot.com</h3>
            </div>
            <div className='flex justify-center border-b pb-3 items-center flex-col w-full'>
                
                <div className='flex justify-between w-full'>
                    <Link to={"/root/preview"}>
                    <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                        <div>
                            <BsFillEyeFill className='text-2xl'/>
                        </div>
                        <div>
                            <h3>Preview</h3>
                        </div>
                    </div>
                    </Link>
                    <Link to={"/root/settings"}>
                    <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                        <div>
                            <AiFillSetting className='text-2xl'/>
                        </div>
                        <div>
                            <h3>Settings</h3>
                        </div>
                    </div>
                    </Link>
                    <Link to="/root/customize">
                    <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                        <div>
                            <BsPencil className='text-2xl'/>
                        </div>
                        <div>
                            <h3>Customize</h3>
                        </div>
                    </div>
                    </Link>
                    <Link to="/root/embed-and-Share">
                    <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                        <div>
                            <ImEmbed2 className='text-2xl'/>
                        </div>
                        <div>
                            <h3>Embed & Share</h3>
                        </div>
                    </div>
                    </Link>
                    <Link to={"/root/chat-inbox"}>
                    <div className='flex items-center gap-2 active:scale-95 cursor-pointer'>
                        <div>
                            <BsChatLeftText className='text-2xl'/>
                        </div>
                        <div>
                            <h3>Chat Inbox</h3>
                        </div>
                    </div>
                    </Link>
                    <Link to="/root/manage_data_sources">
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



        {
            location.pathname ==="/root/preview"? <Preview/>:""
        }
        {
            location.pathname ==="/root/settings"? <Settings/>:""
        }
        {
            location.pathname ==="/root/customize"? <Customize/>:""
        }
        {
            location.pathname ==="/root/embed-and-Share"? <Embed_and_Share/>:""
        }
        {
            location.pathname ==="/root/chat-inbox"? <Chat_Inbox/>:""
        }
        {
            location.pathname ==="/root/manage_data_sources"? <Manage_Data_Sources/>:""
        }

        </div>
    </>
  )
}
