import React, { useEffect, useState } from 'react'
import axios from 'axios'
import serverBasePath from '../../../constants'
import ChatbotCard from './childs/ChatbotCard'
import { useNavigate } from 'react-router-dom';

import LoadingDots from '../loading/LoadingDots';

import { MdOutlineManageAccounts } from "react-icons/md"

import Delete_popup from './childs/Delete_popup';

export default function Home({ agencyClient }) {

    let temp = [];
    const [agencyView, setAgencyView] = useState(undefined);
    const [chatbots, setChatbots] = useState(temp);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        axios.get(serverBasePath + '/auth/isAuthenticated', {
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
            },
            withCredentials: true
        })
            .then((response) => {
                if (response.data.authenticated === false) {
                    navigate('/login')
                }
            })
            .catch((err) => console.log(err));


        if (agencyClient !== undefined) {
            temp = [...agencyClient.chatbots]
            console.log(temp[0])
            setAgencyView(true);
            setChatbots(temp)
            setLoading(false);
        }
        else {
            setAgencyView(false)
            fetchChatbots();
        }
        

    }, [])
    const [delete_bot, setdelete_bot] = useState(false)
    const [chat_bot_id, setchat_bot_id] = useState(null)
    const navigate = useNavigate();


    function fetchChatbots() {
        console.log('fetch called')
        axios.get(serverBasePath + '/my-chatbots', {
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            withCredentials: true
        })
            .then(response => {

                console.log(response.data.chatBots)
                if (response.data.chatBots.length !== 0) {
                    const newChatBots = response.data.chatBots.map(chatbot => ({
                        name: chatbot.name,
                        id: chatbot._id,
                        totalConversations: chatbot.totalConversations,
                        totalMessages: chatbot.totalMessages,
                        totalResolutions: chatbot.totalResolutions
                    }));

                    setChatbots(newChatBots);
                    setLoading(false);
                }
                else {
                    navigate('/load-url')
                }
            })
            .catch(err => console.log(err));
    }

    // useEffect(() => {
    //     axios.get(serverBasePath + '/auth/isAuthenticated', {
    //         headers: {
    //             'content-type': 'application/json',
    //             'Accept': 'application/json',
    //         },
    //         withCredentials: true
    //     })
    //         .then((response) => {
    //             if (response.data.authenticated === false) {
    //                 navigate('/login')
    //             }
    //         })
    //         .catch((err) => console.log(err));
    // }, []);

    // useEffect(() => {
    //     console.log(chatbots, agencyView)

    // }, [])

    function deleteChatbot(id) {
        axios.delete(serverBasePath + `/deleteBot/${id}`, {
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
            },
            withCredentials: true
        })
            .then((response) => {
                if (response.status === 200) {
                    fetchChatbots()
                }
            })
            .catch(err => console.log(err));
    }





    // --------for delete bot-----------------
    const delete_traind_bot = (chat_id) => {
        setchat_bot_id(chat_id)
        if (delete_bot === true) {
            setdelete_bot(false);
        } else {
            setdelete_bot(true);
        }
    }



    return (

        <>
            {agencyView &&
                <div className='p-3 px-11 bg-blue-900 mt-[-2rem] mb-8 text-white font-medium'>
                    <MdOutlineManageAccounts size={25} className='inline mx-2' />
                    You are viewing this page as an manager
                </div>
            }
            <div className='mx-2 sm:mx-10'>
                <div className='flex justify-between mb-8'>
                    <div>
                        <h3 className='text-2xl sm:text-4xl font-bold'>{agencyClient !== undefined ? `${agencyClient.name}'s ` : ''}Dashboard</h3>
                    </div>
                    <div 
                    onClick={() => {navigate('/load-url')}}
                    className='bg-gray-900 text-white items-center cursor-pointer justify-center flex px-2 sm:px-8 rounded-md active:scale-95'>
                        <h3>New Ai Bot</h3>
                    </div>
                </div>
                {chatbots.map((chatbot, i) => <ChatbotCard delete_traind_bot={delete_traind_bot} chatbot={chatbot} deleteChatbot={deleteChatbot} key={i} />)}
            </div>

            {
                delete_bot ? <Delete_popup chat_bot_id={chat_bot_id} delete_traind_bot={delete_traind_bot} deleteChatbot={deleteChatbot} /> : ""
            }


            {/* -------you can pass width for dots size------------- */}
            {
                loading &&
                <div className='mx-auto mt-16 w-fit h-fit'>
                    <LoadingDots size={"4"} />

                </div>
            }
        </>

    )
}
