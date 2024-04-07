import axios from "axios"

 const loginService = async (inputs) => {
    console.log(inputs)
    const url = process.env.REACT_APP_SERVER
    console.log(url)
        const response = await axios.post(process.env.REACT_APP_SERVER + '/auth/login', inputs)
        console.log(response)
        return response
    }

export default loginService