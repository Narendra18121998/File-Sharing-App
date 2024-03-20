import './index.css';
import React from 'react';
import {useRef, useState,useEffect} from 'react';
import { uploadFile } from './services/api';

function App() {
  const[file,setFile]=useState('');
  const[result,setResult]=useState('')

  const fileInputRef = useRef();
  const onUploadClick=()=>{
    fileInputRef.current.click();
  }

  console.log(file) 

  useEffect(()=>{
    const getImage=async()=>{
      if(file){
        const data = new FormData();
        data.append("name",file.name)
        data.append("file",file)

        let response = await uploadFile(data);
        //console.log(response)
        setResult(response.path)
      }
    }
    getImage();
  },[file])

  const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg'
  return (
    <>
    <div className='container'>
        <img src={logo} alt="logo" />
        <div className='wrapper'>
          <h1>Simple File Sharing</h1>
          <p>Upload and share the download link!</p>
          <button onClick={()=>{onUploadClick()}}>Upload</button>
          <input type="file" ref={fileInputRef} style={{display: 'none'}} onChange={(e)=>setFile(e.target.files[0])} />
        
          <a href={result} target="_blank" rel="noreferrer">{result} </a>
        </div>
      
    </div>
    </>
  );
}

export default App;
