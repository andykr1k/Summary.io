import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import Layout from './layouts/Layout'

export default function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Layout>
    </BrowserRouter>
  )
}
