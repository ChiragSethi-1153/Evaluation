import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Box}  from '@mui/material'
import {Navigate}  from 'react-router-dom'
import { fetchUsers } from '../../features/User/userAction';
import styles from './Home.module.css'
import UserSidebar from '../../components/UserSidebar/UserSideBar';

const Home = () => {
  
  const dispatch = useDispatch()

  const users = useSelector((state) => state?.user?.content)
  const role = useSelector((state) => state?.auth?.content?.user?.role)
  console.log(users)

  useEffect(() => {
  dispatch(fetchUsers())
  }, [dispatch])

  if(role === "admin"){
    return (
      <>
        <Navigate to='/admin/dashboard' />
      </>
    )
  }
  else{
    return (
      <>
        <Navigate to='/user/tests' />
      </>
    )
  }

  
}

export default Home
