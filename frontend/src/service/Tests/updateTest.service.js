import axios from "axios"

 const updateTestService = async (inputs) => {
    const token = localStorage.getItem("token")
    const config = {
        headers: {'authorization': `Bearer ${token}`
    }
}
        const response = await axios.put(`http://localhost:8080/tests`, inputs, config)
        return response
    }

export default updateTestService