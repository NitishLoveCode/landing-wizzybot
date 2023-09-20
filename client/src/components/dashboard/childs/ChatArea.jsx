import ChatBubble from "../../shared_components/ChatBubble";
import { CiVolumeHigh } from "react-icons/ci"
import { AiOutlineSend } from "react-icons/ai"
import { FaUserCircle } from 'react-icons/fa'
import { useState } from "react";
import LoadingDots from "../../loading/LoadingDots";

export default function ChatArea({ messages, setMessages, name, loading, conversationId, socketId }) {


    const [text, setText] = useState('');

    function addMessage(message) {
        setMessages(message, socketId);
    }

    function sendMessage(event) {
        event.preventDefault();
        let messageBody = { sender: 'supportAgent', body: text, conversationId: conversationId }
        addMessage(messageBody);

        setText('')
    }

    function handleChange(event) {
        //handle input being done in the text area. This text will be the user input that will be sent to the server. 
        setText(event.target.value)
    }


    return (
        <div className='w-full overflow-y-auto'>
            <div className='sticky top-0 '>
                <div className=' relative border-[1px] shadow-xl overflow-hidden
            border-gray-300 h-[80vh]'>
                    <div className="bg-gray-200 px-2 py-2 flex items-center gap-2">
                        <FaUserCircle size={35} color="#374151" />
                        <h3 className="text-xl">{name}</h3>
                    </div>
                    <div className="w-full flex flex-col overflow-y-auto h-[83%]">

                        {loading === conversationId &&
                            <div className="mt-10 text-center">
                            <LoadingDots size={4} color={'bg-main'} />
                            <p className="text-main my-3">Loading conversation history</p>

                        </div>}

                        {messages.map((message, index) => <ChatBubble key={index + 1}
                            id={index + 1}
                            message={message}
                        />)}
                    </div>

                    {/* {typing && <ChatBubble key={-1} typing={typing} />} */}

                    <div className='absolute bg-white bottom-0 w-full'>
                        <div className='border-[1px] border-gray-300 h-14 px-2 flex w-full justify-between'>
                            <form onSubmit={sendMessage} className="w-full flex">

                                <input
                                    className='outline-none w-[95%]'
                                    type="text"
                                    name="message"
                                    placeholder='Send message'
                                    value={text}
                                    onChange={handleChange}
                                />

                                <button type="submit">
                                    <AiOutlineSend className='pl-2 text-4xl' />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}