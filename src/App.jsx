import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, PDFChat } from './pages'
import Layout from './layouts/Layout'

export default function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/chat' element={<PDFChat/>}/>
          </Routes>
        </Layout>
    </BrowserRouter>
  )
}
