import * as React from 'react'
import { FileUpload } from '../components'
import { motion } from 'framer-motion'

export default function PDFChat() {
  return (
    <div className='grid place-items-center'>
        <h2 className="text-3xl font-bold dark:text-white text-slate-400 pb-10">
            Chat with a PDF!
        </h2>
        <div className='fixed bottom-0 p-5'>
          <input placeholder='OpenAI Key' className='w-full p-1 mb-2 rounded-md bg-transparent border-2 text-center' id="OPENAIKEY"></input>
          <FileUpload/>
          <motion.button whileHover={{scale:1.1}} className='dark:text-white bg-purple-800 text-slate-400 w-full p-1 mt-2 rounded-md bg-transparent text-center'>Start Chat</motion.button>
        </div>
    </div>
  )
}
