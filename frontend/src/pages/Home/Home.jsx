import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../../features/User/userAction';

const Home = () => {
  
  const dispatch = useDispatch()

  const users = useSelector((state) => state?.user?.content)
  console.log(users)

  useEffect(() => {
  dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      
    </div>
  )
}

export default Home
