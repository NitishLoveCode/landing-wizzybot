import React from 'react'
import { useLocation } from 'react-router-dom'
import HeaderBar from './HeaderBar'

export default function HeaderRoot() {
    const location = useLocation()
    

  return (
    <>
        {
            location.pathname==="/login" || location.pathname==="/register" ? "":<HeaderBar/>
        }
    </>
  )
}
