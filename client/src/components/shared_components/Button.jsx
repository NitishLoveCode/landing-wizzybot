import React from 'react'


export default function Button({style,text,action}) {

  // NOTE: look, if you want to use button component, for function or anything.
            // props name should be (action)
  // =================================================================

  return (
    <div>
        <button onClick={()=>action()} className={style}>{text}</button>
    </div>
  )
}
