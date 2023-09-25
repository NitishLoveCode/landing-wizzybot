import React from 'react'
import {FiAlertTriangle} from "react-icons/fi"

export default function RemoveClient({popupToggle,deleteClient,email}) {
  return (
    <>
        <div className='w-[100vw] h-[100vh] bg-opacity-90 z-40 top-0 items-center justify-center flex absolute bg-slate-400'>
            <div className='rounded-2xl p-8 items-center border-gray-700
                            bg-slate-200 w-[95vw] sm:w-[30vw]'>
                <div className='flex item-center bg-slate-200'>
                    <div className='h-10 items-center flex justify-center'>
                        <FiAlertTriangle className='text-3xl text-red-400'/>
                    </div>
                    <div>
                        <h3 className='text-2xl'>Remove Client</h3>
                        <h4 className='text-justify'>Are you sure you want to remove this client? Once deleted, you will no longer be able to access this account without requesting access again.</h4>
                    </div>
                </div>
                <div className='flex justify-end gap-2'>
                    <button onClick={popupToggle} className='border-[1px] border-gray-600 px-5 mt-1 rounded-md active:scale-95 p-2'>Cancel</button>
                    <button onClick={() => { deleteClient(email) }} className='bg-red-500 text-white px-5 mt-1 rounded-md active:scale-95 p-2'>Delete</button>
                </div>
            </div>
        </div>
    </>
  )
}
