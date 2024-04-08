const {userController, testController} = require('../controller/index')
const { verifyToken } = require('../middleware/auth')
const router = require('express').Router()


router.post("/tests", verifyToken,  testController.createTest)
router.get("/tests", verifyToken, testController.getAllTests)
router.get("/tests/:testId", verifyToken, testController.getTest)
router.put("/tests", verifyToken, testController.updateTest)
// router.get('/users', verifyToken, userController.getAllUsers)

module.exports = router 