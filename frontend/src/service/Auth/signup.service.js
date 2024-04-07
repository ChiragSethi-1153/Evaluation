import axios from "axios"

 const signupService = async (inputs) => {

        const response = await axios.post('http://localhost:8080/auth/signup', inputs)
        return response
    
}

export default signupService