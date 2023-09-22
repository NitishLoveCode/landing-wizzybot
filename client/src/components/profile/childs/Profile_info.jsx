import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react'
import { AiFillPlusCircle } from "react-icons/ai"
import serverBasePath from '../../../../constants';
import { useNavigate, useParams } from 'react-router-dom';

export default function Profile_info() {
    const [passChangeMessage, setPassChangeMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [selectedFileName, setSelectedFileName] = useState('No file chosen');
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        name: '',
    });


    const [passwordFields, setPasswordFields] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [userChange, setUserChange] = useState({
        name: false,
        image: false
    })

    useLayoutEffect(() => {
        axios.get(serverBasePath + '/my-account', {
            withCredentials: true
        })
            .then(async response => {
                if (response.status === 200) {
                    setUser(response.data);
                }
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    navigate('/login');
                }
            });
    }, []);



    function handlePasswordFieldChange(key, event) {
        setPasswordFields(prev => {
            return {
                ...prev,
                [key]: event.target.value
            }
        })
    }

    function changePassword() {

        if (passwordFields.newPassword !== passwordFields.confirmPassword) return;

        if (user.email !== '') {
            axios.post(`${serverBasePath}/auth/change-password`,
                {
                    email: user.email,
                    oldPassword: passwordFields.currentPassword,
                    newPassword: passwordFields.newPassword
                },
                {
                    withCredentials: true
                })
                .then(function (response) {
                    if (response.status === 200) {
                        setPassChangeMessage(response.data.response);
                        setTimeout(() => setPassChangeMessage(''), 5000);
                    }
                })
                .catch(function (error) {
                    setPassChangeMessage(error.response.data.response);
                });
        }
    }

    function deleteUser() {
        axios.delete(`${serverBasePath}/auth/deleteAccount`, {
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            withCredentials: true
        })
            .then((response) => {
                if (response.status === 200) {
                    navigate("/login");
                }
            })
            .catch(err => console.log(err));

    }

    function onFileChange(event) {
        setUserChange(u => { return { ...u, image: true } });
        setSelectedFile(event.target.files[0]);
        setSelectedFileName(event.target.files[0].name);
    };

    function handleNameChange(e) {
        setUserChange(u => { return { ...u, name: true } })
        setUser(user => { return { ...user, name: e.target.value } });
        
    }

    function handleUserInformationUpdate() {

        if (userChange.image && !userChange.name) {
            // only image has changed

            const formData = new FormData();
            formData.append('myFile', selectedFile, selectedFile.name);
            axios.post(`${serverBasePath}/user/user-image`, formData, { withCredentials: true })
                .then(res => console.log(res))
                .catch(err => console.error(err));
        } else if (!userChange.image && userChange.name) {
            // only name has changed
            axios.post(`${serverBasePath}/user/change-name`, { name: user.name }, { withCredentials: true })
                .then(res => console.log(res))
                .catch(err => console.error(err));
        } else if (userChange.image && userChange.name) {
            // both image and name have changed
            const formData = new FormData();
            formData.append('myFile', selectedFile, selectedFile.name);
            axios.post(`${serverBasePath}/user/user-image`, formData, { withCredentials: true })
                .then(res => console.log(res))
                .catch(err => console.error(err));

            axios.post(`${serverBasePath}/user/change-name`, { name: user.name }, { withCredentials: true })
                .then(res => console.log(res))
                .catch(err => console.error(err));
        }
        // if none has changed do nothing
    }

    return (
        <>
            <div>
                

                <div className='w-[82vw] sm:w-full flex sm:flex-row flex-col p-2 sm:p-10 gap-8'>
                    <div className='w-[82vw] sm:w-[40%]'>
                        <h3 className='text-xl font-bold'>Personal Information</h3>
                        <p>Update your personal information associated with your account.</p>
                    </div>
                    <div className='w-[82vw] sm:w-[28%] flex flex-col justify-start'>
                        <div>
                            <div className='border-[1px] p-1 rounded-md'>
                                <div className='flex items-center gap-4'>
                                    <label htmlFor="upload_Avatar">
                                        <div className='flex cursor-pointer active:scale-95 items-center gap-2 border-[1px] w-fit p-2 bg-green-100 rounded-md'>
                                            <AiFillPlusCircle className='text-xl' />
                                            <h3>Choose file</h3>
                                        </div>
                                    </label>
                                    <div>
                                        <h3>{selectedFileName}</h3>
                                    </div>
                                </div>
                            </div>
                            <input className='hidden' type="file" name="" id="upload_Avatar" onChange={onFileChange} />
                        </div>
                        <label className='mt-4'>Name</label>

                        <input
                            className='w-full outline-none rounded-md border-[1px] pl-2 h-10'
                            type="text"
                            name="UserName"
                            placeholder='Name'
                            value={user.name}
                            onChange={handleNameChange}
                        />

                        <div className='bg-main mt-4 p-2 w-[82vw] sm:w-24 items-center justify-center flex rounded-md text-white active:scale-95'>
                            <button onClick={handleUserInformationUpdate}>Update</button>
                        </div>
                    </div>
                    <hr />
                </div>

                <div className='w-[82vw] sm:w-full flex sm:flex-row flex-col p-2 sm:p-10 gap-8'>
                    <div className='w-[82vw] sm:w-[40%]'>
                        <h3 className='text-xl font-bold'>Change Password</h3>
                        <p>Update your password associated with your account.</p>
                    </div>
                    <div className='sm:w-[60%] flex flex-col gap-1 justify-start'>
                        <h3>Current Password</h3>
                        <input
                            className='w-full mb-2 outline-none rounded-md border-[1px] pl-2 h-10'
                            type="password"
                            name="WorkspaceName"
                            placeholder='Current Password'
                            value={passwordFields.currentPassword}
                            onChange={event => { handlePasswordFieldChange('currentPassword', event) }}
                        />

                        <h3>New Password</h3>
                        <input
                            className='w-full mb-2 outline-none rounded-md border-[1px] pl-2 h-10'
                            type="password"
                            name="WorkspaceName"
                            placeholder='New Password'
                            value={passwordFields.newPassword}
                            onChange={(event) => {
                                handlePasswordFieldChange('newPassword', event)
                            }}
                        />

                        <h3>Confirm Password</h3>
                        <input
                            className='w-full mb-2 outline-none rounded-md border-[1px] pl-2 h-10'
                            type="password"
                            name="WorkspaceName"
                            placeholder='Confirm Password'
                            value={passwordFields.confirmPassword}
                            onChange={(event) => { handlePasswordFieldChange('confirmPassword', event) }}
                        />


                        <div className='bg-main p-2 w-full sm:w-24 items-center justify-center flex rounded-md text-white active:scale-95'>
                            <button onClick={changePassword}>Update</button>
                        </div>
                        <p className='font-extralight mt-2 text-red-500'>{passChangeMessage}</p>
                    </div>
                    <hr />
                </div>

                <div className='w-[82vw] sm:w-full flex sm:flex-row flex-col p-2 sm:p-10'>
                    <div className='w-[82vw] sm:w-[40%]'>
                        <h3 className='text-xl font-bold'>Other Settings</h3>
                        <p>Update other settings associated with your account.</p>
                    </div>
                    <div className='sm:w-[60%] flex flex-col gap-4 justify-start'>
                        <div className='bg-red-500 p-2 sm:w-fit items-center justify-center flex rounded-md text-white active:scale-95'>
                            <button onClick={deleteUser}>Delete Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
