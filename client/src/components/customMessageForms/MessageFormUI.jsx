import React, { useState } from 'react'
import {XMarkIcon,PaperClipIcon,PaperAirplaneIcon} from "@heroicons/react/24/solid"
import Dropzone from 'react-dropzone';


const MessageFormUI = ({
    setAttachment,message,handleChange,handleSubmit
}) => {
    const [preview,setPreview] = useState("");
  return (
    <div className='message-form-container'>
      {preview&& (
        <div className='message-form-preview'>
            <img alt='message-form-preview' className='message-form-preview-image' src={preview} onLoad={()=> URL.revokeObjectURL(preview)} />
            <XMarkIcon
            className='message-form-icon-x'
            onClick = {()=>{
                setPreview("");
                setAttachment("");
            }}
        />
        </div>
      )}
      <div className='message-form'>
        <div className='message-form-input-container'>
            <input 
            className='message-form-input'
            type='text'
            value={message}
            onChange={handleChange}
            placeholder='send a message ....' />
            
        </div>
        <div className='message-form-icons'>
        <Dropzone acceptFiles = ".jpg,.jepg,.png"
                multiple={false}
                noClick={true}
                onDrop={(acceptFiles)=>{
                    setAttachment(acceptFiles[0]);
                    setPreview(URL.createObjectURL(acceptFiles[0]))
            }}>
                {({getRootPros,getInputProps,open})=>(
                    <div {...getRootPros}>
                        <input {...getInputProps()}/>
                        <PaperClipIcon 
                        className='message-form-icon-clip'
                        onClick={open}/>
                    </div>
                )}
        </Dropzone>
        <hr className='vertical-line'/>
        <PaperAirplaneIcon className='message-form-icon-airplane'
            onClick ={()=>{
                setPreview("");
                handleSubmit();
            }}
        />
        </div>
      </div>
    </div>
  )
}

export default MessageFormUI
