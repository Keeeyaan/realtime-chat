import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Chat from './pages/Chat'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat/:id' element={<Chat />} />
      </Routes>
    </>
  )
}

export default App
