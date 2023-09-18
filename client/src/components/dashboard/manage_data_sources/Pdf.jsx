import React from 'react'
import {IoMdAddCircleOutline} from "react-icons/io"
import {BsDatabase} from "react-icons/bs"
import {RiDeleteBin6Line} from "react-icons/ri"

export default function Pdf() {
  return (
    <>
        <div className='w-[95vw] sm:w-[50vw]'>
            <div>
                <h3 className='text-xl sm:text-3xl font-bold'>Import PDF Content</h3>
            </div>
            <div className='mb-20'>
                <label htmlFor="pdf_file">
                <div className='border-[1px] flex items-center justify-center gap-4 active:scale-95 cursor-pointer bg-green-100 border-gray-700 w-fit p-2 mt-4 rounded-md pl-8 pr-8'>
                    <IoMdAddCircleOutline className='text-2xl'/>
                    <h3>Choose file</h3>
                    <input className='hidden' type="file" name="pdf_file" id="pdf_file" />
                </div>
                </label>


                <div className='mt-4 mb-2'>
                    <textarea className='w-full hover:border-main sm:w-[50vw] border-[1px] border-gray-400 p-2 rounded-md h-[18vh]'  name=""></textarea>
                </div>
            <hr />

            </div>



            <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold'>Imported & Trained <br className='sm:hidden'></br> PDF Contents</h3>
                <button className='rounded-md text-sm hover:border-red-400 hover:text-red-400 active:scale-95 border-[1px] p-2 px-3'>Delete All</button>
            </div>
            {/* --------------------if-data in state-------------------- */}
            <div>
                <div className='w-[95vw] overflow-y-scroll mt-2 overflow-hidden rounded-md sm:w-full border-[1px] border-gray-400 h-[20vh]'>
                    <div className='p-2 justify-between flex items-center bg-gray-100 '>
                        <div>
                            <h3 className='text-sm'>Title: title shuld be slice</h3>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <h3 className='text-sm'>Length: 3453</h3>
                            <RiDeleteBin6Line className='hover:text-red-400 cursor-pointer active:scale-95'/>
                        </div>
                    </div>
                    <div className='p-2 text-sm'>
                        <p className='text-justify'>Text: NITISH KUMAR Sec-45 Noida, India Mobile: +91 9818165647 ⋄ NitishLoveCode@gmail.com https://www.linkedin.com/in/nitishlovecode/ ⋄ OBJECTIVE 4+ years of experience ars MongoDB</p>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------------------------- */}


            {/* ----------------------if state is null---------------- */}
            <div className='flex items-center justify-center mt-6'>
                <div className='flex gap-2 flex-col items-center justify-center'>
                    <BsDatabase className='text-4xl'/>
                    <h3>No item</h3>
                    <h3>There are no items in the library.</h3>
                </div>
            </div>
            {/* ------------------------------------------------- */}

        </div>
    </>
  )
}
