const router = require("express").Router()

router.use('/', require('./auth.routes'))
router.use('/', require('./user.routes'))
router.use('/', require('./test.routes'))
router.use('/', require('./question.routes'))

router.use('/', require('./404.routes'))


module.exports = router