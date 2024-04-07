import { Outlet, Navigate } from 'react-router-dom'
import {useSelector} from "react-redux"

const PrivateRoutes = () => {
    const token = localStorage.getItem('token')
    console.log(token)
    return(
        token ?
            <Outlet/> :
            <Navigate to="/login"/>
    )
}
export default PrivateRoutes