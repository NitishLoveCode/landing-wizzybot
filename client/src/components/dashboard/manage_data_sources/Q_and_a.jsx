import React, { useState } from 'react'
import Input_field from '../../shared_components/Input_field'
import Button from '../../shared_components/Button'
import {BsDatabase} from "react-icons/bs"
import {MdAddCircle} from "react-icons/md"
import {IoIosArrowDown} from "react-icons/io"
import QuestionForm from './QuestionForm'
import Saved_question from './Saved_question'

export default function Q_and_a() {
    const[add_new_question, setadd_new_question]=useState(false)

    // ------------dummy question form------------------
    const questionsAndAnswers = [
        {
          id: 1,
          question: "What is the capital of France?",
          answer: "Paris"
        },
        {
          id: 2,
          question: "What is 2 + 2?",
          answer: "4"
        },
        {
          id: 3,
          question: "Who wrote 'To Kill a Mockingbird'?",
          answer: "Harper Lee"
        },
        {
          id: 4,
          question: "What is the symbol for water?",
          answer: "H2O"
        }
      ];



    // creteing new Question and answer-------------
    const new_question_adding=()=>{
        if(add_new_question===false){
            setadd_new_question(true)
        }else{
            setadd_new_question(false)
        }
    }
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
                    <button onClick={()=>new_question_adding()}>Add</button>
                </div>
            </div>
            {/* --------------------------------------------------------- */}

            {/* -----------------------create new questions and answers--------- */}
                {
                    add_new_question? <QuestionForm/>:""
                }
                

            {/* ---------------------------------------------------------------------- */}
            <div className='my-8'>
                <h3 className='text-2xl font-bold'>Trained Q&A Contents</h3>
            </div>
            {
                questionsAndAnswers.map((cur)=>{
                    return <Saved_question cur={cur}/>
                })
                
            }
            {/* --------------------------------------------------------------- */}





{/* ---------------------------if there is no questions to display--------------------- */}
            {/* <div className='flex items-center justify-center mt-6'>
                <div className='flex gap-2 flex-col items-center justify-center'>
                    <BsDatabase className='text-4xl'/>
                    <h3>No item</h3>
                    <h3>There are no items in the library.</h3>
                </div>
            </div> */}
   {/* --------------------------------------------------------------------------------------          */}


        </div>
    </>
  )
}
