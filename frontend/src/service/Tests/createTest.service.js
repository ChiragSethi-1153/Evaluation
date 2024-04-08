import axios from "axios"

 const createTestService = async (inputs) => {
    const token = localStorage.getItem("token")
    const config = {
        headers: {'authorization': `Bearer ${token}`
    }
}
        const response = await axios.post(`http://localhost:8080/tests`, inputs, config)
        return response
    }

export default createTestService