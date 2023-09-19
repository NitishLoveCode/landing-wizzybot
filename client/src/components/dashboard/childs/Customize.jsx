import React, { useEffect, useState } from 'react'
import { AiOutlineArrowDown } from "react-icons/ai"
import { IoMdAddCircle } from "react-icons/io"
import Main_chat_box from './Main_chat_box'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import serverBasePath from '../../../../constants';

export default function Customize() {

  const { id } = useParams();
  const [hidden, sethidden] = useState(false)
  const [settings, setSettings] = useState({});
  const [response, setResponse] = useState('');
  const [backup, setBackup] = useState({});//keeps a backup of the settings currently on the server.


  function handleChange(key, event) {
    setSettings({
      ...settings,
      [key]: event.target.value

    });

  }

  useEffect(() => {
    axios.get(`${serverBasePath}/settings/${id}`, {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: true
    })
      .then((response) => {
        setSettings(response.data);
        setBackup(response.data)
      })
      .catch(err => console.log(err));

  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = `${serverBasePath}/styles/userStyle.css/${id}`;
    link.rel = "stylesheet";

    // Append the new stylesheet to the document head
    document.head.appendChild(link);
  }, []); // Empty array ensures this runs once on mount and not on updates

  function updateSettings() {
    axios.post(`${serverBasePath}/settings/${id}`, settings, {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: true
    })
      .then((response) => {
        if (response.status === 200) {
          setBackup({ ...settings });
        }
      })
      .catch(err => console.log(err));
  }

  function cancelUpdate() {
    const backupCopy = { ...backup };
    setSettings(backupCopy);

  }

  const hide_and_show=()=>{
    if(hidden===true){
      sethidden(false)
    }else{
      sethidden(true)
    }
  }

  return (
    <>
      <div className='flex sm:flex-row flex-col gap-10'>
        <div className="flex flex-col gap-8 pb-8">
          <div className='border-[1px] border-gray-400 rounded-md gap-4 pb-4 w-full sm:w-[55vw]'>
            <div className='flex h-14 cursor-pointer border-gray-400 border-b-[1px] px-5 items-center justify-between'>
              <h3>Branding Settings</h3>
              <AiOutlineArrowDown />
            </div>
            <div className='flex px-5 py-4 mt-2 items-center gap-4'>
              <div>
                <h3 className='font-bold'>Theme</h3>
              </div>
              <div className='text-sm border-[1px] px-3 py-1 rounded-md active:scale-95 cursor-pointer'>
                <h3>Reset</h3>
              </div>
            </div>

            <div className='flex sm:flex-row flex-col py-1 justify-between'>
              <div className='px-5 mt-4'>
                <div>
                  <h3>AI Bot Header Color</h3>
                </div>
                <div className='border-[1px] border-gray-400 rounded-md p-1 w-auto flex items-center justify-between'>
                  <input
                    value={settings.headerBarColor}
                    onChange={(evt) => { handleChange('headerBarColor', evt) }}
                    className='w-8'
                    type="color"
                    name=""
                    id="AI_Bot_color"
                  />
                  <div className=''><h3>{settings.headerBarColor}</h3></div>
                </div>
              </div>
              <div className='px-5 mt-4'>
                <div>
                  <h3>Message color</h3>
                </div>
                <div className='border-[1px] border-gray-400 rounded-md p-1 w-auto flex items-center justify-between'>
                  <input
                    value={settings.botBubbleColor}
                    onChange={(evt) => { handleChange('botBubbleColor', evt) }}
                    className='w-8'
                    type="color"
                    name=""
                    id={'Message Color'}
                  />
                  <div className=''><h3>{settings.botBubbleColor}</h3></div>
                </div>
              </div>
              <div className='px-5 mt-4'>
                <div>
                  <h3>User message color</h3>
                </div>
                <div className='border-[1px] border-gray-400 rounded-md p-1 w-auto flex items-center justify-between'>
                  <input
                    value={settings.userBubbleColor}
                    onChange={(evt) => { handleChange('userBubbleColor', evt) }}
                    className='w-8'
                    type="color"
                    name=""
                    id="AI_Bot_color" />
                  <div className=''><h3>{settings.userBubbleColor}</h3></div>
                </div>
              </div>
            </div>

            <div className='px-5 py-3 mt-4'>
              <div>
                <h3>Upload header logo</h3>
              </div>
              <div className='border-[1px] overflow-hidden rounded-md flex items-center gap-8 p-1 border-gray-300'>
                <div className='border-[1px] border-gray-400 py-[5px] rounded-md cursor-pointer active:scale-95 flex items-center gap-2 w-full sm:w-32 p-1 justify-between'>
                  <div className=''>
                    <IoMdAddCircle className='text-2xl' />
                  </div>
                  <div>
                    <h3>Choose file</h3>
                  </div>
                </div>
                <div>
                  <h3>/_next/static/media/logo-white.94898d4d.png</h3>
                </div>
              </div>
              <div className='mt-4 flex items-center gap-2'>
                <input className='h-4 w-4 cursor-pointer' type="checkbox" name="" id="Remove_tag" />
                <label className='cursor-pointer' htmlFor="Remove_tag">Remove “Powered by LiveChatAI” branding</label>
              </div>
            </div>
            <div className='flex justify-end px-5 gap-4'>
              <button
                className='border-[1px] border-gray-400 p-2 px-8 rounded-md active:scale-95'
                onClick={cancelUpdate}
              >
                Cancel
              </button>

              <button
                className='border-[1px] border-gray-400 p-2 px-8 rounded-md bg-gray-800 text-white active:scale-95'
                onClick={updateSettings}
              >
                Save
              </button>

            </div>
          </div>

          {/* ------------------------bottom card-------------- */}


          {

            hidden ? <>
            <div className='border-[1px] border-gray-400 rounded-md gap-4 pb-4 w-full sm:w-[55vw]'>
              <div onClick={()=>hide_and_show()} className='flex h-14 cursor-pointer border-gray-400 border-b-[1px] px-5 items-center justify-between'>
                <h3>Initial Message</h3>
                <AiOutlineArrowDown />
              </div>

              <div className='px-5 mt-4 mb-4'>
              <div>
                <h3>Initial Message</h3>
              </div>
              <div>
                <textarea
                  className='w-full px-2 outline-none h-32 rounded-md border-[1px] border-gray-400'
                  name="Initial_Message"
                  value={settings.initialMessage}
                  onChange={(evt) => { handleChange('initialMessage', evt) }}
                />
              </div>
              <div>
                <h3 className='text-sm'>Enter each message in a new line.</h3>
              </div>
            </div>

            <div className='flex justify-end px-5 gap-4'>
              <button
                className='border-[1px] border-gray-400 p-2 px-8 rounded-md active:scale-95'
                onClick={cancelUpdate}
              >
                Cancel
              </button>
              <button
                className='border-[1px] border-gray-400 p-2 px-8 rounded-md bg-gray-800 text-white active:scale-95'
                onClick={updateSettings}
              >
                Save
              </button>
            </div>
          </div>
            </>:<>

            <div onClick={()=>hide_and_show()} className='flex h-14 cursor-pointer border-gray-400 rounded-md border-[1px] px-5 items-center justify-between'>
                <h3>Initial Message</h3>
                <AiOutlineArrowDown />
          </div>
            </>
          }

        </div>

        {
          <Main_chat_box AI_Bot_color={settings.headerBarColor} User_message_color={settings.userBubbleColor} Message_color={settings.botBubbleColor} Initial_Message={settings.initialMessage} />
        }

        {/* -------------------------------- */}
      </div>
    </>
  )
}
