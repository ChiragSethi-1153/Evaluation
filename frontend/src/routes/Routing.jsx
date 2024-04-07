import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from '../pages/UserLogin/UserLogin'
import UserSignup from '../pages/UserSignup/UserSignup'
import Home from '../pages/Home/Home'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/home' element={<Home />} />
        

    </Routes>
  )
}

export default Routing
