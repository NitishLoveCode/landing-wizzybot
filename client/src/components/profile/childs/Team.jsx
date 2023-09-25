import React, { useEffect, useState } from 'react'
import { MdAddCircle } from "react-icons/md"
import TeamMemberCard from './TeamMemberCard'
import serverBasePath from '../../../../constants';
import axios from 'axios';

export default function Team({ add_new_team_popup }) {
    const [teamMembers, setTeamMembers] = useState([]);
    const [user, setUser] = useState({
        email: "",
        plan: "",
        totalConversations: 0,
        usedConversations: 0,
        name: '',
        API: "",
    });


    useEffect(() => {
        axios.get(serverBasePath + '/my-account', {
            withCredentials: true
        })
            .then(async response => {
                if (response.status === 200) {
                    setUser(response.data);
                    fetchTeamMembers()
                }
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    navigate('/login');
                }
            });
    }, [])

    function fetchTeamMembers() {
        axios.get(serverBasePath + '/user/my-agencies', {
            withCredentials: true
        })
            .then(async response => {
                if (response.status === 200) {
                    setTeamMembers(response.data.managers);
                }
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                }
            });
    }


    function removeAgency(email) {
        axios.post(`${serverBasePath}/user/remove-agency`,
            {
                email: email
            },
            {
                withCredentials: true
            })
            .then(function (response) {
                if (response.status === 200) {
                    fetchTeamMembers();
                }
            })
            .catch(function (error) {
                // setPassChangeMessage(error.response.data.response);
                console.log(error)
            });
    }



    return (
        <>
            <div className='w-full flex sm:flex-row flex-col justify-between px-3 sm:px-10 pt-10 pb-2 gap-8'>
                <div className='w-[82vw] sm:w-[40%]'>
                    <h3 className='text-xl font-bold'>{user.name}'s Workspace</h3>
                </div>
                <div onClick={() => add_new_team_popup()} className='flex active:scale-95 cursor-pointer items-center gap-1 bg-main text-white p-2 px-4 rounded-md'>
                    <MdAddCircle className="text-white" />
                    <h3>Add user</h3>
                </div>
            </div>

            <div className='w-[82vw] border-b-[1px] sm:w-full flex justify-between px-2 sm:px-16 sm:pr-24 pt-4 pb-2 sm:gap-8'>
                <h3>Users who currently have access to you account:</h3>
            </div>
            {/* ------------------- List of users from here------ */}


            <TeamMemberCard name={user.name} email={user.email} owner={true} deleteAction={removeAgency} key={-1} />
            {
                teamMembers.map((user, index) => {
                    return <TeamMemberCard name={user.name} email={user.email} owner={user.owner} deleteAction={removeAgency} key={index} />
                })
            }


        </>
    )
}
