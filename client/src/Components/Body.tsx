import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Page/Login'
import Main from '../Page/Main'
import styled from "styled-components";

const Body = () => {
  return (
    <BodyStyle>
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
    </Routes>
    </BodyStyle>
  )
}

export default Body

const BodyStyle = styled.div`
`