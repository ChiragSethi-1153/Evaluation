import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from '../pages/UserLogin/UserLogin'
import UserSignup from '../pages/UserSignup/UserSignup'
import Home from '../pages/Home/Home'
import PrivateRoutes from './PrivateRoutes'
import Dashboard from '../pages/Dashboard/Dashboard'
import { useSelector } from 'react-redux'
import AllTests from '../pages/AllTests/AllTests'
import Sidebar from '../components/Sidebar/Sidebar'
import TestDetails from '../pages/TestDetails/TestDetails'
import AddTest from '../pages/AddTest/AddTest'
import Settings from '../pages/Settings/Settings'
import UserTests from '../pages/UserTests/UserTests'
import UserTestDetails from '../pages/UserTestDetails/UserTestDetails'
import StartTest from '../pages/StartTest/StartTest'
import UserSettings from '../pages/UserSettings/UserSettings'
import Attempted from '../pages/Attempted/Attempted'

const Routing = () => {




  // const adminRoutes = [
  //   {
  //     path: "/dashboard",

  //   }
  // ]

  // const userRoutes = [
  //   {
  //     path: '/home',
  //     element: <Home /> 
  //   }
  // ]

  return (
    <Routes>
      <Route path='/' element={<UserLogin />} /> 
      <Route path='/login' element={<UserLogin />} />
      <Route path='/signup' element={<UserSignup />} />


      
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/tests' element={<AllTests />} />
        <Route path='/admin/tests/:testId' element={<TestDetails />} />
        <Route path='/admin/addtest' element={<AddTest />} />
        <Route path='/admin/settings' element={<Settings />} />

      <Route path='/home' element={<Home />} />
      <Route path='/user/tests' element={<UserTests />} />
      <Route path='/user/attempted' element={<Attempted />} />
        <Route path='/user/tests/:testId' element={<UserTestDetails />} />
        <Route path='/user/test/:testId' element={<StartTest />} />
        <Route path='/user/settings' element={<UserSettings />} />

    </Routes>
  )
}

export default Routing
