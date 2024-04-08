import axios from "axios"

const fetchUserService = async () => {
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            'authorization': `Bearer ${token}`
        }
    }
    const response = await axios.get('http://localhost:8080' + '/users', config)
    return response
}

export default fetchUserService