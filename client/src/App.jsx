import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Register from './components/entry/Register'
import Login from './components/entry/Login'
import HeaderRoot from './components/header/heder_nav/HeaderRoot'
import Load_url from './components/scrape/Load_url'
import Scraped_url from './components/scrape/Scraped_url'
import Root_page from './components/dashboard/Root_page'
import Preview from './components/dashboard/childs/Preview'
import Home from './components/Home/Home'
import Left_sidebar from './components/profile/Left_sidebar'
import Forgotpassword from './components/entry/Forgotpassword'
import Landing from './components/dashboard/landing/Landing'

export default function App() {
  return (
    <>
      <BrowserRouter>
          <HeaderRoot/>
          <Routes>
            <Route path='/' element={<Navigate to={'/dashboard'}/>} />
            <Route path ="/Dashboard" element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgot-password' element={<Forgotpassword/>}/>
            <Route path='/load-url' element={<Load_url/>}/>
            <Route path='/scrape' element={<Scraped_url/>}/>
            <Route path='/chatbot/:childs/:id' element={<Root_page/>}/>
            <Route path='/profile/:childs' element={<Left_sidebar/>}/>
            <Route path='/profile/demo' element={<Landing/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}
