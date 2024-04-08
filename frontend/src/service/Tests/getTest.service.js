import axios from "axios"

 const fetchTestService = async () => {
    const token = localStorage.getItem("token")
    const config = {
        headers: {'authorization': `Bearer ${token}`
    }
}
        const response = await axios.get('http://localhost:8080/tests', config)
        console.log(response)
        return response
    }

export default fetchTestService