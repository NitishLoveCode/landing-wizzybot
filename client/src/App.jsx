import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/entry/Register'
import Login from './components/entry/Login'
import HeaderRoot from './components/header/heder_nav/HeaderRoot'
import Load_url from './components/scrape/Load_url'
import Scraped_url from './components/scrape/Scraped_url'
import Root_page from './components/dashboard/Root_page'
import Preview from './components/dashboard/childs/Preview'

export default function App() {
  return (
    <>
      <BrowserRouter>
          <HeaderRoot/>
          <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/load-url' element={<Load_url/>}/>
            <Route path='/scrape' element={<Scraped_url/>}/>
            <Route path='/root/:childs' element={<Root_page/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}
