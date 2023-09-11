import React, { useState } from 'react'
import Source_1_2_card from './child/Source_1_2_card'
import Heading_text from '../shared_components/Heading_text'
import Input_field from '../shared_components/Input_field'
import Button from '../shared_components/Button'
import Scraped_link from '../shared_components/Scraped_link'
import Human_Ai_select_popup from './child/Human_Ai_select_popup'

export default function Scraped_url() {
  // -----------Human and AI bot popup-----------------
  const [selectMode, setselectMode] =useState(false)


  // --------------human and AI bot function-----------------
  const human_ai_popup=()=>{
    console.log("human_ai_popup called")
    if(selectMode==false){
      setselectMode(true);
    }else{
      setselectMode(false);
    }
  }
  return (
    <>
      <Source_1_2_card/>
        <div className='flex flex-col gap-3 justify-center items-center text-center'>
            <Heading_text text_size={"text-xl sm:text-3xl mt-4 font-bold text-gray-800"} text={"Choose Pages and Import Custom Data"}/>
            <Heading_text text_size={"text-md text-gray-800"} text={"We have crawled all the pages on your website and listed them here. If you wish to exclude any pages, you can delete them from the list."}/>
            <Heading_text text_size={"text-sm mb-3 text-gray-500"} text={"Once you're satisfied with the selection, click the 'Import The Content and Create My AI Bot' button below to complete the import process."}/>


            {/* -----------scraped links------------ */}
            <Scraped_link link={"https://studyloverveer.in/free-courses"} data={"878"}/>
            <Scraped_link link={"https://studyloverveer.in/free-courses"} data={"878"}/>
            <Scraped_link link={"https://studyloverveer.in/free-courses"} data={"878"}/>
            <Scraped_link link={"https://studyloverveer.in/free-courses"} data={"878"}/>
            <Scraped_link link={"https://studyloverveer.in/free-courses"} data={"878"}/>
            <Scraped_link link={"https://studyloverveer.in/free-courses"} data={"878"}/>
            {/* --------------scraped links end------------------- */}


            {/* ---passing porps for Ai_human_popup--- */}
            <Button action={human_ai_popup} style={"bg-gray-800 text-white sm:p-3 pl-7 pr-7 rounded-full active:scale-95"} text={"Import the content & create my AI bot"}/>

            {/* ------------scraped page info---------------- */}
            <div className='flex justify-between mt-6 gap-6 w-full sm:w-[35vw] mb-10'>
              <div className='border-2 h-20 flex flex-col justify-center items-center shadow-xl pl-14 pr-14 w-[50%] sm:w-[17vw]'>
                <h2 className='text-md font-bold text-gray-600'>Total Pages</h2>
                <h3 className='text-2xl sm:text-4xl font-bold text-gray-700'>68</h3>
              </div>
              <div className='border-2 h-20 flex flex-col justify-center items-center shadow-xl w-[50%] sm:w-[17vw]'>
                <h2 className='text-md font-bold text-gray-600'>Total Characters</h2>
                <h3 className='text-2xl sm:text-4xl font-bold text-gray-700'>834532</h3>
              </div>
            </div>


            {/* ----------------select bot or human popup---------- */}

            {
              selectMode? <><Human_Ai_select_popup/></>:""
            }
                        
        </div>
    </>
  )
}
