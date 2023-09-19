import React, { useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io"
import {BsDatabase} from "react-icons/bs"
import {RiDeleteBin6Line} from "react-icons/ri"

import axios from 'axios';
import serverBasePath from '../../../../constants';
import { useParams } from 'react-router-dom';

export default function Pdf() {
    const [files, setFiles] = useState([]); // State to keep track of uploaded files
    const {id} = useParams();

    function handleFileUpload(e) {
        // Append new files to existing ones
        setFiles([...files, ...e.target.files]);

        // Prepare FormData
        const formData = new FormData();
        Array.from(e.target.files).forEach(file => {
            formData.append('file', file);
        });
        formData.append('id', id);

        // Send files using axios
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        axios.post(serverBasePath + '/train/files', formData, config)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => console.log("Error in upload: ", err));
    };

    return (
        <>
            <div className='w-[95vw] sm:w-[50vw]'>
                <div>
                    <h3 className='text-xl sm:text-3xl font-bold'>Import PDF Content</h3>
                </div>
                <div className='mb-20'>
                    {/* file uploader button */}
                    <label htmlFor="pdf_file">
                        <div className='border-[1px] flex items-center justify-center gap-4 active:scale-95 cursor-pointer bg-green-100 border-gray-700 w-fit p-2 mt-4 rounded-md pl-8 pr-8'>
                            <IoMdAddCircleOutline className='text-2xl' />
                            <h3>Choose file</h3>
                            <input
                                className='hidden'
                                type="file"
                                name="pdf_file"
                                id="pdf_file"
                                onChange={handleFileUpload} // attach event handler function
                            />
                        </div>
                    </label>
                </div>
                <hr />
                <div>
                    <h3 className='text-2xl font-bold'>Imported & Trained PDF Contents</h3>
                </div>
                <div className='flex items-center justify-center mt-6'>
                    <div className='flex gap-2 flex-col items-center justify-center'>
                        <BsDatabase className='text-4xl' />
                        <h3>No item</h3>
                        {/* Conditional rendering to show if files have been uploaded */}
                        {files.length > 0
                            ? <p>Files uploaded: {files.map(file => file.name).join(', ')}</p>
                            : <h3>There are no items in the library.</h3>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
