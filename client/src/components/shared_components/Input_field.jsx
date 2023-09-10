import React from 'react'

export default function Input_field({style,name,placeholder}) {
  return (
    <>
        <div>
            <input className={style} type="text" name={name} placeholder={placeholder}/>
        </div>
    </>
  )
}
