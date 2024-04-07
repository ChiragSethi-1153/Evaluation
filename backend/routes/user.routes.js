const {userController} = require('../controller/index')
const { verifyToken } = require('../middleware/auth')
const router = require('express').Router()


router.get("/users",   userController.getUsers)
// router.put("/user", verifyToken, userController.editUser)
// router.get('/users', verifyToken, userController.getAllUsers)

module.exports = router 