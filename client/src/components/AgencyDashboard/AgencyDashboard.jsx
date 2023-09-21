import React, { useEffect, useState } from 'react'
import axios from 'axios'
import serverBasePath from '../../../constants'
import { useNavigate } from 'react-router-dom';
import UserCard from './child/UserCard';
import AddClient from './child/AddClient';
import RemoveClient from './child/RemoveClient';

export default function AgencyDashboard({ setAgencyClient }) {

    const [clients, setClients] = useState([]);
    const [removeClient, setremoveClient] = useState(false)
    const [removeClientEmail, setRemoveClientEmail] = useState(null)
    const [clientPopupOpen, setClientPopupOpen] = useState(false);

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
                        // console.log('clinet', client.id);
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

    function deleteClient(email) {
        axios.delete(`${serverBasePath}/agency/client/${email}`, {
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
            },
            withCredentials: true
        })
            .then((response) => {
                if (response.status === 200) {
                    fetchChatbots()
                    setremoveClient(false);
                }
            })
            .catch(err => console.log(err));
    }

    function deletePopup(email){
        setRemoveClientEmail(email);
        setremoveClient(true);
    }





    const add_new_client_popup = () => {
        setClientPopupOpen(!clientPopupOpen);
    }



    return (

        <>
            <div className='mx-2 sm:mx-10'>
                <div className='flex justify-between mb-8'>
                    <div>
                        <h3 className='text-2xl sm:text-4xl font-bold'>Accounts I can access</h3>
                    </div>
                    <div
                        className='bg-gray-900 text-white items-center cursor-pointer justify-center flex px-2 sm:px-8 rounded-md active:scale-95'
                        onClick={add_new_client_popup}
                    >
                        <h3>Add new user</h3>
                    </div>
                </div>
                <div className='mt-20 flex flex-col md:flex-row gap-16 justify-center'>
                    {clients.map((client, i) => <UserCard
                        id={client.id}
                        email={client.email}
                        name={client.name}
                        delete_traind_bot={deletePopup}
                        chatbots={client.chatBots}
                        setAgencyClient={setAgencyClient}
                        key={client.id}
                    />)}
                </div>
            </div>

            {
                removeClient ? <RemoveClient email={removeClientEmail} popupToggle={()=>{setremoveClient(!removeClient)}} deleteClient={deleteClient} /> : ""
            }


            {
                clientPopupOpen ? <AddClient add_new_client_popup={add_new_client_popup} fetchChatbots={fetchChatbots} /> : ""
            }

        </>

    )
}
