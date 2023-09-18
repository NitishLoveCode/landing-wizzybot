import React from 'react'
import {AiFillPlusCircle} from "react-icons/ai"

export default function Profile_info() {
  return (
    <>
        <div>
        <div className='w-[82vw] flex flex-col sm:flex-row p-2 sm:p-10 gap-8'>
                <div className='w-[82vw] sm:w-[40%]'>
                    <h3 className='text-xl font-bold'>Workspace Information</h3>
                    <p>Update your workspace information associated with your account.</p>
                </div>
                <div className='w-[100vw] sm:w-[60%] flex flex-col gap-4 justify-start'>
                    <h3 className='text-md font-bold'>Workspace Name</h3>
                    <input className='w-[82vw] sm:w-full outline-none rounded-md border-[1px] sm:pl-2 h-10' type="text" name="WorkspaceName" placeholder='Workspace Name'/>
                    <div className='bg-main p-2 w-[82vw] sm:w-24 items-center justify-center flex rounded-md text-white active:scale-95'>
                        <button>Update</button>
                    </div>
                </div>
            <hr />
            </div>

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
                                    <AiFillPlusCircle className='text-xl'/>
                                    <h3>Choose file</h3>
                                </div>
                                </label>
                                <div>
                                    <h3>No file choosen</h3>
                                </div>
                            </div>
                        </div>
                        <input className='hidden' type="file" name="" id="upload_Avatar" />
                    </div>
                    <label className='mt-4'>Name</label>
                    <input className='w-full outline-none rounded-md border-[1px] pl-2 h-10' type="text" name="WorkspaceName" placeholder='Name'/>
                    <div className='bg-main mt-4 p-2 w-[82vw] sm:w-24 items-center justify-center flex rounded-md text-white active:scale-95'>
                        <button>Update</button>
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
                    <input className='w-full mb-2 outline-none rounded-md border-[1px] pl-2 h-10' type="text" name="WorkspaceName" placeholder='Current Password'/>

                    <h3>New Password</h3>
                    <input className='w-full mb-2 outline-none rounded-md border-[1px] pl-2 h-10' type="text" name="WorkspaceName" placeholder='New Password'/>
                    
                    <h3>Confirm Password</h3>
                    <input className='w-full mb-2 outline-none rounded-md border-[1px] pl-2 h-10' type="text" name="WorkspaceName" placeholder='Confirm Password'/>
                    

                    <div className='bg-main p-2 w-full sm:w-24 items-center justify-center flex rounded-md text-white active:scale-95'>
                        <button>Update</button>
                    </div>
                </div>
            <hr />
            </div>

            <div className='w-[82vw] sm:w-full flex sm:flex-row flex-col p-2 sm:p-10'>
                <div className='w-[82vw] sm:w-[40%]'>
                    <h3 className='text-xl font-bold'>Other Settings</h3>
                    <p>Update other settings associated with your account.</p>
                </div>
                <div className=' sm:w-[60%] flex flex-col gap-4 justify-start'>
                    <div className='bg-red-500 p-2 sm:w-fit items-center justify-center flex rounded-md text-white active:scale-95'>
                        <button>Delete Account</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
