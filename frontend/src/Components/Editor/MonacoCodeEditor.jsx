import React, { useEffect, useState } from 'react'
import Editor from '@monaco-editor/react';
import EditorLanguages from './EditorLanguages';
import {defaultCode} from "../Contants/index"
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { useParams } from 'react-router-dom';
import { PiLinkSimpleDuotone } from "react-icons/pi";
import {toast} from "react-toastify"


const BASE_URL = "http://localhost:9000/api-code";

const language =[{
  type:'html',
  value:'html'
},{
  type:"css",
  value:"css"
},{
  type:"javascript",
  value:"javascript"
}]

const MonacoCodeEditor = () => {
   
  
  const { codeId } = useParams();
 const navigate = useNavigate();
 
  
  const [theme , setTheme] = useState("light")
  const [lang , setLang] = useState("html")
  const [text , setText] = useState("Share")
  const [code , setCode] = useState(defaultCode);
 
 
 const themeHandler = (e)=>{
    setTheme(e.target.value) 
  }
  const languageHander = (e)=>{ 
    setLang(e.target.value)  
  }
  const handleCopy = ()=>{
    const {href} = location;
    navigator.clipboard.writeText(href);
    toast.success("Link copied successfully...")
  }

   const codeHandler= (value)=>{ 
    setCode({...code,[lang]:value})
   }
    
     const saveCodeHandler =async ()=>{
      try {
     const response = await  axios.post(`${BASE_URL}/saveCode`,code);
       navigate(`/${response.data.data.code_id}`)
     toast.success("code has saved successfully...")
      } catch (error) { 
        toast.error("Unable to save the code")
      }
     }

     const UpdateCodeHandler =async ()=>{
       try {
        const response = await axios.put(`${BASE_URL}/editCode/${codeId}`,{
           html:code.html,
           css:code.css,
           javascript:code.javascript
        })
 
        toast.success("Code has updated to DataBase successfully...")
       } catch (error) { 
        toast.error("Error while updating the Data");
       }
     }

   useEffect(()=>{
     const fetchData =async ()=>{
       try {
        const data = await axios.get(`${BASE_URL}/getCode/${codeId}`);
          setCode(data.data.data)
       } catch (error) {
       toast.error("Error while fetching the code");
       
       }
     }
     if(codeId)  fetchData()
   },[])

  return (
    <div className='w-full h-full flex items-center  flex-col'>
      <Editor   height="60vh" width="60%"  language={lang} value={`${code[lang]}`}  theme={theme=="dark"?"vs-dark":"vs-white"}    options={{
          fontFamily: "Outfit",
          fontLigatures: true,
          fontWeight: 500,
          formatOnPaste: true,
          formatOnType: true,
        }}
         onChange={codeHandler}
        />
      <div className={`w-[60%] pt-[10px]  rounded-md flex justify-between ${theme=="dark"?"bg-[#1E1E1E]":"bg-white"} `}>
        <div  >
            < EditorLanguages language={language} languageHander={languageHander}  themeHandler={themeHandler}    />
   
        </div>
        <div className='px-2 flex flex-row-reverse gap-4 '>
       <button
  onClick={() => {
    if (!codeId) {
      
      saveCodeHandler();
    }  else{
      UpdateCodeHandler();
    }
  }}
  className={`${codeId?"bg-zinc-500":"bg-blue-500"} px-4 py-2 text-white font-semibold mb-[4px]  rounded-md ${codeId?"hover:bg-zinc-600":"hover:bg-blue-600"} cursor-pointer `}
>
{!codeId? "Share":"UpdateCode" }
</button>
{
  codeId && <div className='flex items-center'>
       <PiLinkSimpleDuotone className={`${theme=="light" ? "text-black":"text-white"}`}  />
  <button  className={`cursor-pointer font-semibold ${theme=="light" ? "text-black":"text-white"}`} onClick={()=>{
       if(codeId){
      handleCopy()
      
      };}}  >{"..../"+codeId.slice(0,10)}</button>
</div>
}
      </div>
      </div>
     </div>
  )
}

export default MonacoCodeEditor
