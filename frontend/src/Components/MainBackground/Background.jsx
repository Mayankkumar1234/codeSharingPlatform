import React from 'react'
import bgImage from "../../resources/Hero-Background-notecode@2x.png"
import noteCode from "../../resources/NoteCodeLogo.svg"

const Background = ({children}) => {
  return (
    <div className='h-screen w-full bg-[#ba84e3] relative'>
      
      <img className='w-full h-[85vh] ' src={bgImage} alt="" />

     {
      children &&  <div className='absolute -translate-x-[50%] left-[50%] top-2 w-full  '>
        {
          children
        }
      </div>
     }
    </div>
    
  )
}

export default Background
