import React from 'react'

export default function Team() {
  return (
    <>
        <div className='w-full border-b-[1px] flex sm:flex-row flex-col justify-between px-3 sm:px-10 pt-10 pb-2 gap-8'>
                <div className='w-[82vw] sm:w-[40%]'>
                    <h3 className='text-xl font-bold'>Nitish kumar's Workspace</h3>
                    
                </div>
            </div>
            {/* ------------------- List of users from here------ */}
            <div>
                <div className='w-[82vw] sm:w-full flex justify-between px-2 sm:px-10 sm:pr-24 pt-4 pb-2 sm:gap-8'>
                    
                    <div className='flex items-center gap-4'>
                        <div>
                            <div className='w-12 h-12 sm:w-16 sm:h-16 bg-gray-300 active:scale-95 cursor-pointer rounded-full items-center justify-center'>
                                <img className='w-12 h-12 sm:w-16 sm:h-16 rounded-full' src="https://lh3.googleusercontent.com/a-/ALV-UjWVCUf8M6k7Fi1D15xkBwMEepL4Ma7U1tTz7-GvtzwYYccahb2L3D2lDenwfoZG-1gxgyM3uhI7-QDG08z9NdUK5RwJa9INBb_dmgdz9tfNi0gl2fGffDdo9_uC3Mxz6iEoABEZX8pRbdLhuODHLZlGUeEF3ceOxxzHNQyEru-G4ajj_ebS1oULels3U41K-tABoj9I29Chs16WIUq-w9_L5EZbi04CRj39BEt9Fw47d4b-Az39eRwlw3DZepRkKK90hoGy2xMSYfij0PVS0H4OkLGSyduvQkfLOAs9sTew8j7_17ZqywqaxVTQS5EDU7a5igfC-k3qDlyhblPoLEM7iQKTG0Y66kgHtYRO6G6eiWWB-bcNCCXUtlT0Zfb6n0gHuDXkillaKMx2QFkb6FscOEhs_fo8CNT8MIhAGhbsn6Z3TkDfj2knN2qXH5lxtv2PkRdabzzYt3AQaL3jXSsqmjTKSytz6plCu7LMS9aTA_bdw4ryItuUziQmfw7iuhvKAmJ4mKJk0drvELp4TpidpmV_03cRjDpJKwjAr0EULVdgFrOYsZGuJ-zrS9IPOBA5d17mTsF8XSYtaAkt4dt49dxC589XypcgUcsZLNKPZzFfyzZJpHlowypGpnqWAwdgh1sOfixUSaHVkwcqsHi4Wzqi8JTcic0yK0vDyFmMB3MrAq1BLseSfEm2Fu53bcyJRXjFUM7R4zj6Cx_uFKpZ2vNEyEh6apmYQcmcsjeTZNSfrvOig3L9bQu7Yqp7Z2aBz7kDmW3Ww6FPZlIJrGoPTlOmPQAx70YGPCya4D6g98n1WHMc3o6jv7Sv-EPxqZxCeU0HW0vV9VJo4NmQ3AThsCZRuF5YArUCwlnNaXrG_vKVVFFOpzMxl8dfe0D4rHGeAdUa5GfLp0xcZAGcPzkrue4_z5t3pvMAUlZohpq5S8CLJJqSa8BnmgbyEWtseA=s288-c-no" alt="user" />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-sm sm:text-md'>Nitish kumar</h3>
                            <h3 className='text-sm sm:text-md text-gray-500'>vciutf@gmail.com</h3>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-sm sm:text-md'>OWNER</h3>
                    </div>
                </div>
            </div>
            
    </>
  )
}
