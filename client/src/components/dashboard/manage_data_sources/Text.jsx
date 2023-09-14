import React from 'react'
import Heading_text from '../../shared_components/Heading_text'
import Input_field from '../../shared_components/Input_field'
import Button from '../../shared_components/Button'
import {BsDatabase} from "react-icons/bs"

export default function Text() {
  return (
    <>
        <div className='w-[50vw] mb-8 flex flex-col gap-4'>
            <div>
                <h3 className='text-2xl font-bold'>Add new text content</h3>
            </div>
            <div>
                <Input_field style={"w-full outline-none pl-2 border-[1px] border-gray-400 rounded-md h-10"} placeholder={"title"}/>
            </div>
            <div>
                <textarea className='border-[1px] rounded-md outline-none p-2 w-full border-gray-400' placeholder='Content' name="content" id="" cols="20" rows="5"></textarea>
            </div>
            <div>
                <Button style={"bg-gray-900 p-3 rounded-md active:scale-95 text-white pl-8 pr-8"} text={"Add Content"}/>
            </div>

            <hr />

            <div>
                <h3 className='text-2xl font-bold'>Imported & Trained Text Contents</h3>
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
