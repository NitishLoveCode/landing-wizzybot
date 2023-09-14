import React, { useState } from 'react'
import User_popup_info from './User_popup_info'
import { Link } from 'react-router-dom'

export default function HeaderBar() {
  const [userInfoToggle, setuserInfoToggle]=useState(false)

  const headerToggleOn=()=>{
    if(userInfoToggle==true){
      setuserInfoToggle(false)
    }else{
      setuserInfoToggle(true)
    }
  }
  return (
    <>
      <div className='relative'>
        <div className='flex justify-between sm:pl-10 sm:pr-10 mb-8 shadow-md p-1'>
            <Link to={"/"}>
            <div className='flex cursor-pointer active:scale-95 items-center'>
                <img src="https://app.livechatai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.99eba397.png&w=48&q=75" alt='logo'/>
                <h1 className='text-xl sm:text-2xl font-semibold text-gray-700'>WizzyBot</h1>
            </div>
            </Link>
            <div onClick={()=>headerToggleOn()} className='w-12 h-12 sm:w-16 sm:h-16 bg-gray-300 active:scale-95 cursor-pointer rounded-full items-center justify-center'>
                <img className='w-12 h-12 sm:w-16 sm:h-16 rounded-full' src="https://lh3.googleusercontent.com/a-/ALV-UjWVCUf8M6k7Fi1D15xkBwMEepL4Ma7U1tTz7-GvtzwYYccahb2L3D2lDenwfoZG-1gxgyM3uhI7-QDG08z9NdUK5RwJa9INBb_dmgdz9tfNi0gl2fGffDdo9_uC3Mxz6iEoABEZX8pRbdLhuODHLZlGUeEF3ceOxxzHNQyEru-G4ajj_ebS1oULels3U41K-tABoj9I29Chs16WIUq-w9_L5EZbi04CRj39BEt9Fw47d4b-Az39eRwlw3DZepRkKK90hoGy2xMSYfij0PVS0H4OkLGSyduvQkfLOAs9sTew8j7_17ZqywqaxVTQS5EDU7a5igfC-k3qDlyhblPoLEM7iQKTG0Y66kgHtYRO6G6eiWWB-bcNCCXUtlT0Zfb6n0gHuDXkillaKMx2QFkb6FscOEhs_fo8CNT8MIhAGhbsn6Z3TkDfj2knN2qXH5lxtv2PkRdabzzYt3AQaL3jXSsqmjTKSytz6plCu7LMS9aTA_bdw4ryItuUziQmfw7iuhvKAmJ4mKJk0drvELp4TpidpmV_03cRjDpJKwjAr0EULVdgFrOYsZGuJ-zrS9IPOBA5d17mTsF8XSYtaAkt4dt49dxC589XypcgUcsZLNKPZzFfyzZJpHlowypGpnqWAwdgh1sOfixUSaHVkwcqsHi4Wzqi8JTcic0yK0vDyFmMB3MrAq1BLseSfEm2Fu53bcyJRXjFUM7R4zj6Cx_uFKpZ2vNEyEh6apmYQcmcsjeTZNSfrvOig3L9bQu7Yqp7Z2aBz7kDmW3Ww6FPZlIJrGoPTlOmPQAx70YGPCya4D6g98n1WHMc3o6jv7Sv-EPxqZxCeU0HW0vV9VJo4NmQ3AThsCZRuF5YArUCwlnNaXrG_vKVVFFOpzMxl8dfe0D4rHGeAdUa5GfLp0xcZAGcPzkrue4_z5t3pvMAUlZohpq5S8CLJJqSa8BnmgbyEWtseA=s288-c-no" alt="user" />
            </div>
        </div>


        {/* -----(User_popup_info.jsx) comming from header folder-------  */}
        {
          
          userInfoToggle ? <User_popup_info/>:""
        }
      </div>

    </>
  )
}
