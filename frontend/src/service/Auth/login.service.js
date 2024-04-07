import axios from "axios"

 const loginService = async (inputs) => {
    console.log(inputs)
    const url = process.env.REACT_APP_SERVER
    console.log(url)
    const response = await axios.post(`http://localhost:8080/auth/login`, inputs)
    console.log(response)
    const token = response?.data?.token
    await localStorage.setItem('token', token)
    return response
    }

export default loginService