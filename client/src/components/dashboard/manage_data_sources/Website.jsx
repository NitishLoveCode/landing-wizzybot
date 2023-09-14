import React, { useEffect, useState } from 'react'
import Input_field from '../../shared_components/Input_field'
import Button from '../../shared_components/Button'
import IncludedLink from './childs/IncludedLink'
import axios from 'axios'
import serverBasePath from '../../../../constants'
import { useParams } from 'react-router-dom'

export default function Website() {
  const [links, editLinks] = useState([]);
  const [singleLink, editSingleLink] = useState('');
  const { id } = useParams();

  function addLink(link, index) {
    editLinks(prev => {
      if (link.id === undefined) {
        link.id = index
      }
      return [...prev, link]
    })
  }

  function getLinks() {
    axios.get(serverBasePath + '/train/website/' + id, {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: true
    })
      .then((response) => {
        const data = response.data;
        if (Object.keys(data).length !== 0) {
          data.links.map((link, index) => addLink(link, index))
        }
      })
      .catch(err => console.log(err));
  }

  function sendLinks(untrainedLinks) {
    let single = true;
    if (untrainedLinks === undefined) {
      single= false;
      untrainedLinks = links.filter(item => item.status === undefined || item.status === '');
    }

    axios.post(serverBasePath + '/train/website/links',
      { links: untrainedLinks, chatbotId: id },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        withCredentials: true
      }
    )
      .then((response) => {
        const data = response.data;
        if (Object.keys(data).length !== 0 && response.status !== 400) {
          editLinks([]);
          data.links.map((link, index) => addLink(link, index));
          if (single){
            editSingleLink('');
          }
        }
      })
      .catch(err => console.log(err));
  }

  function trainSingleLink() {
    const linkToCheck = links.filter(link => link.link === singleLink);
    if (linkToCheck.length === 0) {
      sendLinks([{link: singleLink}]);
    }
  }

  useEffect(getLinks, []);

  return (
    <>
      <div className='flex items-center flex-col gap-4'>

        <h3 className='text-3xl font-bold'>Crawl a new website</h3>
        <div className='flex gap-2 items-center'>
          <Input_field placeholder={"Enter Domain"} style={"border-2 rounded-md w-[30vw] h-[6vh] pl-2"} />
          <Button style={"bg-gray-800 text-white p-2 pl-3 pr-3 rounded-md"} text={"Fetch new links from domain"} />
        </div>
        <div className='flex gap-4 items-center justify-center '>
          <div className='w-[25vw] h-[1px] bg-gray-400'></div>
          <div className='w-24 flex justify-center items-center'><h3>OR</h3></div>
          <div className='w-[25vw] h-[1px] bg-gray-400'></div>
        </div>
      </div>

      <div className='flex flex-col gap-4'>

        <h3 className='text-3xl font-bold'>Fetch single link</h3>

        <div className='flex gap-2 items-center'>

          <Input_field
            placeholder={"https://www.example.com"}
            style={"border-2 rounded-md w-[30vw] h-[6vh] pl-2"}
            value={singleLink}
            setValue={editSingleLink}
            name='domain'
          />

          <Button style={"bg-gray-800 text-white p-2 pl-3 pr-3 rounded-md"} text={"Fetch new links from domain"} action={trainSingleLink}/>
        </div>
      </div>
      {/* -------------------Imported & Trained Web Pages------------------- */}

      <div className='flex w-[50vw] flex-col gap-2'>
        <div className='flex w-full justify-between mb-10 gap-8 items-center'>
          <div>
            <h3 className='text-3xl font-bold'>Imported & Trained Web Pages</h3>
          </div>
          <div>
            <Button style={"border-2 rounded-md border-black p-1 pl-2 pr-2"} text={"Delete All"} />
          </div>
        </div>



        {/* --------------------from here trained url------------------------------------- */}

        {
          links.map(webpage => <IncludedLink
            link={webpage}
          />)
        }





      </div>
    </>
  )
}
