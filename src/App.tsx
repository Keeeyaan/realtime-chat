import { Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Home from './pages/Home'
import Chat from './pages/Chat'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat/:id' element={<Chat />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
