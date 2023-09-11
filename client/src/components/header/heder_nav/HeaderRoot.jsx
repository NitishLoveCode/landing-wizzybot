import React from 'react'
import { useLocation } from 'react-router-dom'
import HeaderBar from './HeaderBar'

export default function HeaderRoot() {
    const location = useLocation()
    

  return (
    <>
        <div className='w-screen'>
        {
            location.pathname==="/login" || location.pathname==="/register" ? "":<HeaderBar/>
        }
        </div>
    </>
  )
}
