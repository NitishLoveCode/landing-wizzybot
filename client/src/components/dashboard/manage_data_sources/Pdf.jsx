import React from 'react'
import {IoMdAddCircleOutline} from "react-icons/io"
import {BsDatabase} from "react-icons/bs"

export default function Pdf() {
  return (
    <>
        <div className='w-[50vw]'>
            <div>
                <h3 className='text-3xl font-bold'>Import PDF Content</h3>
            </div>
            <div className='mb-20'>
                <label htmlFor="pdf_file">
                <div className='border-[1px] flex items-center justify-center gap-4 active:scale-95 cursor-pointer bg-green-100 border-gray-700 w-fit p-2 mt-4 rounded-md pl-8 pr-8'>
                    <IoMdAddCircleOutline className='text-2xl'/>
                    <h3>Choose file</h3>
                    <input className='hidden' type="file" name="pdf_file" id="pdf_file" />
                </div>
                </label>
            </div>
            <hr />
            <div>
                <h3 className='text-2xl font-bold'>Imported & Trained PDF Contents</h3>
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
