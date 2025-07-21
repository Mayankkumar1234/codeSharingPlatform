import React from 'react'
import Background from './Components/MainBackground/Background'
 import Content from './Components/Content'
 import {Route , Routes} from 'react-router-dom'
import { toast } from 'react-toastify'


const App = () => {
  return (
    <div className='w-full h-full'>
       <Background>
        <Routes>
          <Route  path="/" element={ < Content />}   />
            <Route  path="/:codeId" element={ < Content />}   />
       
        </Routes>
      </Background>
    </div>
  )
}

export default App
