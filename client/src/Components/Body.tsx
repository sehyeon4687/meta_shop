import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Page/Login'
import Main from '../Page/Main'

const Body = () => {
  return (
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default Body