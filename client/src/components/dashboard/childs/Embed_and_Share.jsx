import React from 'react'
import Heading_text from '../../shared_components/Heading_text'

export default function Embed_and_Share() {
  return (
    <>
      <div className='full flex flex-col mb-8 mt-8 gap-8'>
        <div className='w-full'>
          <h3 className='text-2xl'>Add as Messenger (AI Bot that can open and close)</h3>
          <h3>To add a floating button to specific pages, you can either paste (inject) the following code snippet into the head section or place it anywhere on the page if modifying the head code is not possible.</h3>
        </div>
        <div className='flex gap-8 justify-between'>
          <div className='w=[40vw] items-center justify-center flex text-center rounded-md h-[30vh] bg-gray-900'>
            <h3 className='text-white'>
              {`<script
                src="https://app.livechatai.com/embed.js"
                data-id="clmbvu6kc0001l20f97fmho7y"
                async defer>
              </script>`}
            </h3>
          </div>
          <div className='shadow-2xl border-2'>
            <img src="https://app.livechatai.com/_next/static/media/messenger.395a1ef3.svg" alt="demo" />
          </div>
        </div>



        <div className='w-full'>
          <h3 className='text-2xl'>Share as Full Page Chat</h3>
          <h3>You can share LiveChatAI with your desired visitor via this link.</h3>
        </div>
        <div className='flex gap-8 justify-between'>
          <div className='w=[40vw] items-center justify-center flex text-center rounded-md h-[30vh] bg-gray-900'>
            <h3 className='text-white'>
              {`<script
                src="https://app.livechatai.com/embed.js"
                data-id="clmbvu6kc0001l20f97fmho7y"
                async defer>
              </script>`}
            </h3>
          </div>
          <div className='shadow-2xl border-2'>
            <img src="https://app.livechatai.com/_next/static/media/full-page.27e42ec8.svg" alt="demo" />
          </div>
        </div>


        <div className='w-full'>
          <h3 className='text-2xl'>Add as Inline Chat (Embed within a webpage.)</h3>
          <h3>Paste (embed) this code snippet where you want to display your LiveChatAI within a specific webpage.</h3>
        </div>
        <div className='flex gap-8 justify-between'>
          <div className='w=[40vw] items-center justify-center flex text-center rounded-md h-[30vh] bg-gray-900'>
            <h3 className='text-white'>
              {`<script
                src="https://app.livechatai.com/embed.js"
                data-id="clmbvu6kc0001l20f97fmho7y"
                async defer>
              </script>`}
            </h3>
          </div>
          <div className='shadow-2xl border-2'>
            <img src="https://app.livechatai.com/_next/static/media/inline-chat.a44ad2c1.svg" alt="demo" />
          </div>
        </div>
      </div>
    </>
  )
}
