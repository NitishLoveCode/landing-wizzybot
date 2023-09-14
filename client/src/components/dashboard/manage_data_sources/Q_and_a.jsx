import React from 'react'
import Input_field from '../../shared_components/Input_field'
import Button from '../../shared_components/Button'
import {BsDatabase} from "react-icons/bs"

export default function Q_and_a() {
  return (
    <>
        <div className='w-[50vw]'>
            <div className='flex flex-col gap-4 mb-6'>
                <h3 className='text-2xl font-bold'>Questions and Answers</h3>
                <h3>Add or select suggested questions by AI for your chatbot</h3>
            </div>
            <div className='flex flex-col gap-4 mt10'>
                <Input_field style={"border-[1px] outline-none border-gray-500 w-full h-8 pl-2 rounded-md"} placeholder={"New Questation"}/>
                <textarea className="border-[1px] outline-none border-gray-500 w-full pl-2 rounded-md" placeholder='Answer' name="answer" cols="30" rows="5"></textarea>
            </div>
            <div className='flex gap-10 mt-5'>
                <Button style={"border-[1px] rounded-md boder-gray-800 active:scale-95 w-fit p-2 pr-8 pl-8"} text={"Cancel"}/>
                <Button style={"border-[1px] bg-black text-white active:scale-95 rounded-md boder-gray-800 w-fit p-2 pr-8 pl-8"} text={"Save"}/>
            </div>

            <div className='mt-10'>
                <h3 className='text-2xl font-bold'>Trained Q&A Contents</h3>
            </div>
            <div className='flex items-center justify-center mt-6'>
                <div className='flex gap-2 flex-col items-center justify-center'>
                    <BsDatabase className='text-4xl'/>
                    <h3>No item</h3>
                    <h3>There are no items in the library.</h3>
                </div>
            </div>
        </div>
    </>
  )
}
