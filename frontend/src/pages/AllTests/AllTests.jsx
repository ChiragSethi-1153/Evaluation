import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import {useDispatch, useSelector} from 'react-redux'
import { Box, Typography, Stack } from '@mui/material';
import styles from './AllTests.module.css'
import { fetchTests } from '../../features/Test/testAction';
import TestCard from '../../components/TestCard/TestCard'

const AllTests = () => {

    const dispatch = useDispatch()
    const tests = useSelector((state) => state?.test?.content?.tests)
    console.log(tests)
    useEffect(() => {
        dispatch(fetchTests())
    }, [dispatch])

    return (
        <Box sx={{ display: 'flex' }}>
            <Box ><Sidebar /></Box>
            <Box className={styles.allTests}>
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

export default AllTests
