import { Outlet, Navigate } from 'react-router-dom'
import {useSelector} from "react-redux"

const PrivateRoutes = () => {
    const token = localStorage.getItem('token')
    console.log(token)
    const role = useSelector((state) => state?.auth?.content?.user?.role)

    return(
        token ?
        <>
           
            {
            role === "admin" ?
            <Navigate to="/admin/dashboard"/>
            :
            <Navigate to="/user/alltests"/>   
            } 
         <Outlet/>
        </>
            :
            <Navigate to="/login"/>
    )
}
export default PrivateRoutes