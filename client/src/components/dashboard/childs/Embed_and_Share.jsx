import React from 'react'
import Heading_text from '../../shared_components/Heading_text'
import CodeSnippet from './CodeSnippet'
import { useParams } from 'react-router-dom'
import serverBasePath from '../../../../constants';

export default function Embed_and_Share() {
  const { id } = useParams();

  return (
    <>
      <div className='w-full sm:px-0 flex flex-col mb-8 mt-8 gap-8'>
        <div className='w-full'>
          <h3 className='text-2xl mb-4'>Add as Messenger (AI Bot that can open and close)</h3>
          <h3 className='text-justify'>To add a floating button to specific pages, you can either paste (inject) the following code snippet into the head section or place it anywhere on the page if modifying the head code is not possible.</h3>
        </div>
        <div className='flex sm:flex-row flex-col gap-8 justify-between'>
          <div className='w-[60vw] items-center flex rounded-md h-[30vh] bg-gray-900'>
            {
              <CodeSnippet codeString={`<script>\nconst chatbotId = '${id}';\n</script>\n\n <script\n  src = '${serverBasePath}/embed.js\n defer>\n</script>\n\n`} />
            }

          </div>
          <div className='shadow-2xl border-2'>
            <img src="https://app.livechatai.com/_next/static/media/messenger.395a1ef3.svg" alt="demo" />
          </div>
        </div>

        <div className='w-full'>
          <h3 className='text-2xl mb-4'>Share as Full Page Chat</h3>
          <h3 className='text-justify'>You can share LiveChatAI with your desired visitor via this link.</h3>
        </div>
        <div className='flex sm:flex-row flex-col gap-8 justify-between'>
          <div className='w-[60vw] items-center flex rounded-md h-[30vh] bg-gray-900'>
            {
               <CodeSnippet codeString={`${serverBasePath}/iframe/${id}`} />
            }

          </div>
          <div className='shadow-2xl border-2'>
            <img src="https://app.livechatai.com/_next/static/media/full-page.27e42ec8.svg" alt="demo" />
          </div>
        </div>


        <div className='w-full'>
          <h3 className='text-2xl mb-4'>Add as Inline Chat (Embed within a webpage.)</h3>
          <h3 className='text-justify'>Paste (embed) this code snippet where you want to display your LiveChatAI within a specific webpage.</h3>
        </div>
        <div className='flex sm:flex-row flex-col gap-8 justify-between'>
          <div className='w-[60vw] items-center flex rounded-md h-[30vh] bg-gray-900'>
            {
              <CodeSnippet codeString={` \n<iframe\n src="${serverBasePath}/iframe/${id}"\n frameborder="0" \nstyle=" height:100%;" \nwidth="100%"\n></iframe>`} />
             
            }

          </div>
          <div className='shadow-2xl border-2'>
            <img src="https://app.livechatai.com/_next/static/media/inline-chat.a44ad2c1.svg" alt="demo" />
          </div>
        </div>
      </div>
    </>
  )
}
