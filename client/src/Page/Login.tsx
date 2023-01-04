import React, { useEffect, useState } from 'react'

const Login = () => {

    const sum = (a : number, b : number) : number => {
        return a + b
    }

  return (
    <div>
        <p>login : {sum(5, 10)}</p>
    </div>
  )
}

export default Login