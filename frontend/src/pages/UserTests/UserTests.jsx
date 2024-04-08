
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Box, Typography, Stack } from '@mui/material';
import styles from './UserTests.module.css'

import TestCard from '../../components/TestCard/TestCard'
import UserSidebar from '../../components/UserSidebar/UserSideBar';
import { fetchTests } from '../../features/Test/testAction';

const UserTests = () => {

    const dispatch = useDispatch()
    const tests = useSelector((state) => state?.test?.content)
    console.log(tests)
    useEffect(() => {
        dispatch(fetchTests())
    }, [dispatch])

  return (
    <Box sx={{ display: 'flex' }}>
            <Box ><UserSidebar /></Box>
            <Box className={styles.userTests}>
                <Box>
                    <Typography fontFamily={'Poppins'} fontWeight={'bold'} fontSize={'24px'} >All Tests</Typography>
                </Box>

                <Box sx={{ bgcolor: "#b7d8f7", width: 'fit-content', boxSizing: 'border-box', display: 'flex', flexWrap: "wrap", justifyContent: 'flex-start', p: 2, borderRadius: '10px'  }} marginTop={5}>
                    {
                        tests && tests.length>0 &&
                        tests?.map((i) => {
                            return (
                                <>
                                    <TestCard items={i} />
                                </>
                            )
                        })
                    }
                </Box>

            </Box>
        </Box>
  )
}

export default UserTests
