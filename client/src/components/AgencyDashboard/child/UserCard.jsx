import { AiOutlineDelete } from "react-icons/ai"
import { FiEdit2 } from "react-icons/fi"
import { BiTime } from "react-icons/bi"
import { AiOutlineSetting } from "react-icons/ai"
import { BiFilterAlt } from "react-icons/bi"
import { Link } from 'react-router-dom'

import { useNavigate } from "react-router-dom"
import { useState } from "react"


export default function UserCard({ id, email, name, chatbots, delete_traind_bot, setAgencyClient }) {
    const navigate = useNavigate();

    function handleClick() {
        const client = {
            name: name,
            chatbots: chatbots
        }
        setAgencyClient(client);
        navigate(`/client-dashboard/${id}`)
    }

    return (
        <>
            <div className='w-[95vw] sm:w-[60vw] md:w-[55vw] lg:w-[35vw] rounded-md border-[1px] border-gray-400 h-fit'>
                <div className='flex py-2 px-4 bg-gray-100 rounded-t-md items-center justify-between'>
                    <button onClick={handleClick}>
                        <h3 className="text-sm font-extralight self-start justify-self-start text-left">{name}</h3>
                        <h3 className='text-xl font-semibold'>{email}</h3>
                    </button>
                    <div onClick={() => delete_traind_bot(chatbots.id)}>
                        <AiOutlineDelete className='text-2xl hover:text-red-500 cursor-pointer active:scale-95' />
                    </div>
                </div>
                <div className='flex justify-start items-center p-8'>
                    <p className="text-6xl">{chatbots.length} Chatbot{chatbots.length > 1 ? 's' : ''}</p>
                </div>



                <div className='flex justify-around items-center mb-5'>
                    <button
                        className="w-[95%] p-2 bg-main text-xl font-light text-white rounded hover:bg-blue-700 active:b-blue-700 active:scale-95"
                        onClick={handleClick}
                    >
                        Access Now
                    </button>
                </div>
            </div>
        </>)
}