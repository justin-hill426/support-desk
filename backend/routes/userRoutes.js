const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require('../controllers/userController')


router.post('/', registerUser)

//added a login route
router.post('/login', loginUser)

module.exports = router