import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Input_field from '../../shared_components/Input_field'
import Button from '../../shared_components/Button'

export default function Saved_question({cur, deleteQuestion}) {
    const [card_open, setcard_open]=useState(false)


    const open_card=()=>{
        if(card_open===false){
            setcard_open(true)
        }else{
            setcard_open(false)
        }
    }
  return (
    <>
        

   
            <div>
                <div onClick={()=>open_card()} className='bg-gray-200 cursor-pointer justify-between my-2 px-2 h-10 rounded-md flex items-center'>
                    <h3>{cur.question}</h3>
                    <IoIosArrowDown className='text-2xl'/>
                </div>
            {/* -------------------opened question---------------------------- */}
                <div className={`${card_open ? "":"hidden"} flex bg-gray-200 p-3 rounded-xl flex-col gap-2 mt10`}>
                    <div>
                        <label>Question</label>
                        <Input_field value={cur.question} style={"border-[1px] outline-none border-gray-300 w-full h-10 pl-2 rounded-md"} placeholder={"New Questation"}/>
                    </div>
                    <div>
                        <label>Answer</label>
                        <textarea value={cur.answer} className="border-[1px] outline-none border-gray-300 w-full p-2 rounded-md" placeholder='Answer' name="answer" cols="30" rows="5"></textarea>
                    </div>
                    <div className='flex justify-end gap-10 mt-2'>
                        <Button action={open_card} style={"border-[1px] rounded-md border-gray-600 active:scale-95 w-fit p-2 pr-8 pl-8"} text={"Cancel"}/>
                        <Button style={"border-[1px] bg-black text-white active:scale-95 rounded-md border-gray-800 w-fit p-2 pr-8 pl-8"} text={"Save"}/>
                    </div>
                </div>
        </div>
    </>
  )
}
