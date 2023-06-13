import * as React from 'react'
import { FileUpload } from '../components'

export default function Home() {
  return (
    <div className='grid place-items-center'>
      <h1 className="text-3xl font-bold dark:text-white text-slate-400">
        Summary.io
      </h1>
      <div className='fixed bottom-0 p-5'>
        <FileUpload/>
      </div>
    </div>

  )
}
