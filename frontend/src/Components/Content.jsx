import React from 'react'
import MonacoCodeEditor from './Editor/MonacoCodeEditor'
import notecode from  "../resources//NoteCodeLogo.svg"

const Content = () => {
  return (

    <div className=' flex flex-col gap-16 justify-center items-center w-[100%]' >
            <div className='flex flex-col justify-center  w-full items-center gap-6'>
              <img src={notecode} className=' ' alt="" />
              <div className='text-center'>
                 <h1 className='font-semibold text-2xl pt-4' >Create & Share</h1>
               <h1 className='font-semibold text-4xl' >Your Code easily</h1>
              </div>
            </div>
            <div className='text-center w-full'>
       <MonacoCodeEditor />
    </div>
          </div>
    
  )
}

export default Content
