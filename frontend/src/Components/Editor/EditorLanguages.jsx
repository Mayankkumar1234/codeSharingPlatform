import React, { useState } from 'react'

const EditorLanguages = ({language,languageHander,themeHandler}) => {
 
 
  return (
    <div  className='    w-full h-full' >
       <div className='flex gap-6 mx-2'>
        <select className=' rounded-md py-2 ml-2 bg-zinc-400 font-semibold text-black' onChange={(e)=> languageHander(e)} >

          {
          language && language.map((ele ,idx)=> (
            
          <option key={idx}  value={ele.type}>{ele.type}</option>
          ))
          } 
        </select  >
        <select className='px-2 rounded-md py-1 ml-2 bg-zinc-400 font-semibold text-black' onChange={(e)=>themeHandler(e)} >
          <option  value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div> 
    </div>
  )
}

export default EditorLanguages
