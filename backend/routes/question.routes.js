const {questionController} = require('../controller/index')
const { verifyToken } = require('../middleware/auth')
const router = require('express').Router()


router.post("/questions", verifyToken,  questionController.createQuestion)
router.get("/questions", verifyToken, questionController.getAllQuestions)
router.put("/questions", verifyToken, questionController.updateQuestion)
router.delete('/questions/:questionId', verifyToken, questionController.deleteQuestion)

module.exports = router 