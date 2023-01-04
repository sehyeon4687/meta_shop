import React, { useState } from 'react'
import Main from '../Page/Main'
import Login from '../Page/Login'
import { Route, Routes } from 'react-router-dom'
import List from '../Page/List'

const Body = () => {

  return (
    <div>
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/list' element={<List />} />
        </Routes>
    </div>
  )
}

export default Body