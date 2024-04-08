import axios from "axios"

 const getTestService = async (testId) => {
    const token = localStorage.getItem("token")
    const config = {
        headers: {'authorization': `Bearer ${token}`
    }
}
        const response = await axios.get(`http://localhost:8080/tests/${testId}`, config)
        return response
    }

export default getTestService