import axios from 'axios';
import React, { useState } from 'react'
import {MdOutlineAdd} from "react-icons/md"
import serverBasePath from '../../../../constants';

export default function AddClient({add_new_client_popup, fetchChatbots}) {

    const [email, setEmail] = useState('');

    function addTeamMember(){
        if (email === ''){
            return;
        }
        axios.post(`${serverBasePath}/agency/add-new-client`,
                {
                    email: email
                },
                {
                    withCredentials: true
                })
                .then(function (response) {
                    if (response.status === 200) {
                        add_new_client_popup();
                        fetchChatbots();
                    }
                })
                .catch(function (error) {
                    // setPassChangeMessage(error.response.data.response);
                    console.log(error)
                });
    }

  return (
    <>
        <div className='w-[100vw] z-40 h-[100vh] bg-opacity-60 bg-slate-400 absolute top-0'>
                <div className='flex items-center justify-center mt-[20vh]'>
                    <div className='flex p-2 items-center gap-4 flex-col bg-white justify-centers h-[50vh] rounded-xl w-[35vw]'>
                        <div className='flex items-center justify-center'>
                            <div className='bg-main w-12 h-12 flex items-center justify-center rounded-full '>
                                <MdOutlineAdd className='text-3xl text-white'/>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-2xl'>Add a new client</h3>
                        </div>
                        <div className='items-center text-center flex justify-center'>
                            <h3 className='text-sm'>Add the client's email below to send them an invite. If they accept the invite, you will be able to manage chatbots on their behalf.</h3>
                        </div>
                        <div className='flex ml-20 flex-col justify-center w-full'>
                            <label>Email</label>
                            <input 
                            className='w-[80%] h-10 bg-slate-100 px-2 rounded-md outline-none border-[1px]' 
                            type="email" 
                            name="Email"
                             placeholder='Email'
                             value={email}
                             onChange={(e)=> setEmail(e.target.value)}
                             />
                        </div>
                        <div className='w-full gap-4 flex justify-end'>
                            <button onClick={()=>add_new_client_popup()} className='border-[1px] rounded-md active:scale-95 w-fit p-2'>Cancel</button>
                            <button 
                            className='border-[1px] rounded-md active:scale-95 bg-gray-800 text-white w-fit p-2'
                            onClick={addTeamMember}
                            >Send Invitation</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
