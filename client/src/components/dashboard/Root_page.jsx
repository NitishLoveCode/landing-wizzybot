import React from 'react'
import { useLocation } from 'react-router-dom'
import Preview from './childs/Preview'
import Settings from './childs/Settings'
import Customize from './childs/Customize'
import Embed_and_Share from './childs/Embed_and_Share'
import Chat_Inbox from './childs/Chat_Inbox'
import Manage_Data_Sources from './childs/Manage_Data_Sources'

export default function Root_page() {
    const location =useLocation()
    console.log(location.pathname)
  return (
    <>
        <h1>Root page</h1>
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

    </>
  )
}
