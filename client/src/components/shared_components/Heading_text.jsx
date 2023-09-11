import React from 'react'

export default function Heading_text({text,text_size}) {
  return (
    <>
            <div className={`flex w-full md:w-[680px] text-center items-center justify-center ${text_size}`}>
                <h2 className=''>{text}</h2>
            </div>
    </>
   )
}
