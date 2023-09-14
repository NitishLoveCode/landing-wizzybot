import React from 'react'

export default function Input_field({style,name,placeholder, value, setValue}) {
  return (
    <>
        <div>
            <input className={style} type="text" name={name} placeholder={placeholder} value={value} onChange={(evt) => {setValue(evt.target.value)}}/>
        </div>
    </>
  )
}
