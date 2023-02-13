import React from 'react'
import Homepage from './components/Homepage'
import Createusers from './components/Createusers'
import Users from './components/Users'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Edit from './components/Edit'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Homepage />
        <Routes>
          <Route path='/' element={<Createusers />} />
          <Route path='/users' element={<Users />} />
          <Route path="/edit/:index" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App