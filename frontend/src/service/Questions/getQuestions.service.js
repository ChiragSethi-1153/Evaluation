import axios from "axios"

 const fetchQuestionService = async (testId) => {
    const token = localStorage.getItem("token")
    const config = {
        headers: {'authorization': `Bearer ${token}`
    }
}
        const response = await axios.get(`http://localhost:8080/questions?testId=${testId}`, config)
        return response
    }

export default fetchQuestionService