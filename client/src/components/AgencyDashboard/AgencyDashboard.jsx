import React, { useEffect, useState } from 'react'
import axios from 'axios'
import serverBasePath from '../../../constants'
import { useNavigate } from 'react-router-dom';
import UserCard from './child/UserCard';

export default function AgencyDashboard({ setAgencyClient }) {

    const [clients, setClients] = useState([]);
    const [delete_bot, setdelete_bot] = useState(false)
    const [chat_bot_id, setchat_bot_id] = useState(null)
    const navigate = useNavigate();


    function fetchChatbots() {
        axios.get(`${serverBasePath}/agency/my-chatbots`, {
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            withCredentials: true
        })
            .then(response => {

                if (response.data.clients.length !== 0) {
                    const newChatBots = response.data.clients.map(client => {
                        console.log('clinet', client.id);
                        return {
                            name: client.name,
                            id: client.id,
                            email: client.email,
                            chatBots: client.chatBots
                        }
                    });
                    setClients(newChatBots);
                    // setloading(false);
                }
                else {
                    navigate('/load-url')
                }
            })
            .catch(err => console.log(err));
        console.log('sfsdsdf',clients[0])
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
            <div className='mx-2 sm:mx-10'>
                <div className='flex justify-between mb-8'>
                    <div>
                        <h3 className='text-2xl sm:text-4xl font-bold'>Accounts I can access</h3>
                    </div>
                    <div className='bg-gray-900 text-white items-center cursor-pointer justify-center flex px-2 sm:px-8 rounded-md active:scale-95'>
                        <h3>Add new user</h3>
                    </div>
                </div>
                <div className='mt-20'>
                    {clients.map((client, i) => <UserCard
                        id={client.id}
                        email={client.email}
                        name={client.name}
                        delete_traind_bot={delete_traind_bot}
                        chatbots={client.chatBots}
                        deleteChatbot={deleteChatbot}
                        setAgencyClient={setAgencyClient}
                        key={client.id}
                    />)}
                </div>
            </div>

            {
                delete_bot ? <Delete_popup chat_bot_id={chat_bot_id} delete_traind_bot={delete_traind_bot} deleteChatbot={deleteChatbot} /> : ""
            }

        </>

    )
}
