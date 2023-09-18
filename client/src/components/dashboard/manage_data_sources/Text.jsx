import React, { useEffect, useState } from 'react'
import Heading_text from '../../shared_components/Heading_text'
import Input_field from '../../shared_components/Input_field'
import Button from '../../shared_components/Button'
import { BsDatabase } from "react-icons/bs"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import serverBasePath from '../../../../constants'

export default function Text() {

    const [text, setText] = useState('');
    const [loaded, setLoaded] = useState(false); //used to disbale the input field until data is loaded
    const { id } = useParams();



    function fetchData() {
        axios.get(serverBasePath + '/train/text/' + id, {
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            withCredentials: true
        })
            .then((response) => {
                const data = response.data;
                setText(data.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }

    useEffect(fetchData, []);

    function handleChange(event) {
        setText(event.target.value);
    }

    function sumbitText(event) {
        // event.preventDefault();
        axios.post(serverBasePath + '/train/text',
            { trainText: text, chatbotId: id },
            {
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                withCredentials: true
            }
        )
            .then((response) => {
                if (response.status === 200) {
                    fetchData();
                } else {
                    console.log('error');
                }
            })
            .catch(err => console.log(err));
        // setText('')

    }


    return (
        <>
            <div className='w-[95vw] sm:w-[50vw] mb-8 flex flex-col gap-4'>
                <div>
                    <h3 className='text-2xl font-bold'>Add new text content</h3>
                </div>
                {/* <div>
                <Input_field style={"w-full outline-none pl-2 border-[1px] border-gray-400 rounded-md h-10"} placeholder={"title"}/>
            </div> */}
                <div>
                    <textarea
                        className='border-[1px] rounded-md outline-none p-2 w-full border-gray-400'
                        placeholder={loaded ? "Add Data here to train the model" : 'Please wait while the data is being loaded'}
                        value={text}
                        onChange={handleChange}
                        disabled={!loaded}
                        name="content"
                        cols="20"
                        rows="10"
                    />
                </div>
                <div>
                    <Button style={"bg-gray-900 w-[95vw] sm:w-auto p-3 rounded-md active:scale-95 text-white pl-8 pr-8"} text={"Add Content"} action={sumbitText} />
                </div>

                <hr />

                {/* <div>
                <h3 className='text-2xl font-bold'>Imported & Trained Text Contents</h3>
            </div>
            <div className='flex items-center justify-center mt-6'>
                <div className='flex gap-2 flex-col items-center justify-center'>
                    <BsDatabase className='text-4xl'/>
                    <h3>No item</h3>
                    <h3>There are no items in the library.</h3>
                </div>
            </div> */}
            </div>
        </>
    )
}
