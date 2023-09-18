import React, { useEffect, useState } from 'react'
import axios from 'axios'
import serverBasePath from '../../../constants'
import ChatbotCard from './childs/ChatbotCard'
import { useNavigate } from 'react-router-dom';
import Loading from '../loading/Loading';

export default function Home() {

    const [chatbots, setChatbots] = useState([]);
    const navigate = useNavigate();


    function fetchChatbots() {
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
                    // setloading(false);
                }
                else {
                    navigate('/load-url')
                }
            })
            .catch(err => console.log(err));
    }

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
    }, []);

    useEffect(fetchChatbots, [])

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




    return (

        <>
            <div className='mx-2 sm:mx-10'>
            <div className='flex justify-between mb-8'>
                <div>
                    <h3 className='text-2xl sm:text-4xl font-bold'>Dashboard</h3>
                </div>
                <div className='bg-gray-900 text-white items-center cursor-pointer justify-center flex px-2 sm:px-8 rounded-md active:scale-95'>
                    <h3>New Ai Bot</h3>
                </div>
            </div>
            {chatbots.map((chatbot, i) => <ChatbotCard chatbot={chatbot} deleteChatbot={deleteChatbot} key={i}/>)}
        </div>

        <div>
            <Loading/>
        </div>
        </>

    )
}
