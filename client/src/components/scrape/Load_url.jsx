import React from 'react'
import Source_1_2_card from './child/Source_1_2_card'
import Heading_text from '../shared_components/Heading_text'
import Input_field from '../shared_components/Input_field'
import Button from '../shared_components/Button'

export default function Load_url() {

    

  return (
    <>
        <Source_1_2_card/>
        <div className='flex flex-col gap-3 justify-center items-center text-center'>
            <Heading_text text_size={"text-xl sm:text-3xl mt-4 font-bold text-gray-800"} text={"Add a Website as Data Source"}/>
            <Heading_text text_size={"text-md text-gray-800"} text={"Add a website as a data source by providing a URL for LiveChatAI to crawl and import content."}/>
            <Heading_text text_size={"text-sm mb-3 text-gray-500"} text={"Use the main domain (e.g., domain.com) to crawl all pages, or specify a sub-path (e.g., domain.com/help/) or subdomain (e.g., docs.domain.com) to limit the content imported. This helps in tailoring the AI bot's training to your specific needs."}/>
            <Input_field name={"url"} placeholder={"https://..."} style={"border-2 outline-main w-[94vw] sm:w-[45vw] pl-2 h-10 rounded-md"}/>
            <Button style={"bg-gray-800 text-white p-3 pl-7 pr-7 rounded-full active:scale-95"} text={"Save and get all my links"}/>
            
            <div className='flex w-full gap-2 justify-center items-center'>
                <div className='w-[25%] bg-gray-400 h-[1px]'></div>
                <h3>OR</h3>
                <div className='w-[25%] bg-gray-400 h-[1px]'></div>
            </div>
            
            <Heading_text text_size={"text-xl md:text-4xl mt-4 font-bold text-gray-800"} text={"Submit Sitemap"}/>
            <Heading_text text_size={"text-md text-gray-800"} text={"When you add sitemap, we only crawl and get content from provided URLs on your sitemap."}/>
            <Input_field name={"sitemap"} placeholder={"https://..../sitemap.xml"} style={"border-2 w-[94vw] outline-main sm:w-[45vw] pl-2 h-10 rounded-md"}/>
            <Button style={"bg-gray-800 mb-14 text-white p-3 pl-7 pr-7 rounded-full active:scale-95"} text={"Save and load sitemap"}/>
            
        </div>
    </>
  )
}
