import React from 'react'
import Input_field from '../../shared_components/Input_field'
import Button from '../../shared_components/Button'
import {BsDatabase} from "react-icons/bs"
import {MdAddCircle} from "react-icons/md"
import {IoIosArrowDown} from "react-icons/io"

export default function Q_and_a() {
  return (
    <>
        <div className='sm:w-[50vw] w-[95vw]'>
            <div className='flex flex-col gap-4 mb-6'>
                <h3 className='text-2xl font-bold'>Questions and Answers</h3>
                <h3>Add or select suggested questions by AI for your chatbot</h3>
            </div>

            {/* ----------------add questions button------------- */}
            <div className='flex justify-between sm:justify-normal sm:gap-8 my-2'>
                <div className='bg-green-100 active:scale-95 p-2 rounded-md'>
                    <button>Generate with AI</button>
                </div>
                <div className='bg-green-100 active:scale-95 flex items-center gap-2 p-2 px-8 rounded-md'>
                    <MdAddCircle/>
                    <button>Add</button>
                </div>
            </div>
            {/* --------------------------------------------------------- */}

            {/* -----------------------create questions and answers section--------- */}
            <div className='flex bg-gray-200 p-3 rounded-xl flex-col gap-2 mt10'>
                <div>
                    <label>Question</label>
                    <Input_field style={"border-[1px] outline-none border-gray-300 w-full h-10 pl-2 rounded-md"} placeholder={"New Questation"}/>
                </div>
                <div>
                    <label>Answer</label>
                    <textarea className="border-[1px] outline-none border-gray-300 w-full p-2 rounded-md" placeholder='Answer' name="answer" cols="30" rows="5"></textarea>
                </div>
                <div className='flex justify-end gap-10 mt-2'>
                    <Button style={"border-[1px] rounded-md border-gray-600 active:scale-95 w-fit p-2 pr-8 pl-8"} text={"Cancel"}/>
                    <Button style={"border-[1px] bg-black text-white active:scale-95 rounded-md border-gray-800 w-fit p-2 pr-8 pl-8"} text={"Save"}/>
                </div>
            </div>
            {/* ---------------------------------------------------------------------- */}






            <div className='my-8'>
                <h3 className='text-2xl font-bold'>Trained Q&A Contents</h3>
            </div>

    {/* -----------------------if questions to display----------------- */}
    
            {/* --------------question toggled---------------------- */}
            <div>
                <div className='bg-gray-200 cursor-pointer justify-between my-2 px-2 h-10 rounded-md flex items-center'>
                    <h3>your name?</h3>
                    <IoIosArrowDown className='text-2xl'/>
                </div>

            {/* -------------------opened question---------------------------- */}
                <div className='flex bg-gray-200 p-3 rounded-xl flex-col gap-2 mt10'>
                    <div>
                        <label>Question</label>
                        <Input_field style={"border-[1px] outline-none border-gray-300 w-full h-10 pl-2 rounded-md"} placeholder={"New Questation"}/>
                    </div>
                    <div>
                        <label>Answer</label>
                        <textarea className="border-[1px] outline-none border-gray-300 w-full p-2 rounded-md" placeholder='Answer' name="answer" cols="30" rows="5"></textarea>
                    </div>
                    <div className='flex justify-end gap-10 mt-2'>
                        <Button style={"border-[1px] rounded-md border-gray-600 active:scale-95 w-fit p-2 pr-8 pl-8"} text={"Cancel"}/>
                        <Button style={"border-[1px] bg-black text-white active:scale-95 rounded-md border-gray-800 w-fit p-2 pr-8 pl-8"} text={"Save"}/>
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------------- */}





{/* ---------------------------if there is no questions to display--------------------- */}
            <div className='flex items-center justify-center mt-6'>
                <div className='flex gap-2 flex-col items-center justify-center'>
                    <BsDatabase className='text-4xl'/>
                    <h3>No item</h3>
                    <h3>There are no items in the library.</h3>
                </div>
            </div>
   {/* --------------------------------------------------------------------------------------          */}


        </div>
    </>
  )
}
