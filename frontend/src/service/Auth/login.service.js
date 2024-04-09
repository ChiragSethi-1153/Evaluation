import axios from "axios"

 const loginService = async (inputs) => {
    console.log(inputs)
    const url = process.env.REACT_APP_SERVER
    console.log(url)
    const response = await axios.post(`http://localhost:8080/auth/login`, inputs)
    console.log(response)
    const token = response?.data?.token
     localStorage.setItem('token', token)
    localStorage.setItem('role', response?.data?.user?.role)
    return response
    }

export default loginService