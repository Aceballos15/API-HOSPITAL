const { Router } = require('express')

const router = Router()

//User controllers 
const {CreateUser, ConfirmUser, LoginUser} = require('../Controllers/UserControllers')

//User Routers 


// None 
router.get('/', async(req, res)=>{
    res.json('Get local')
})

//Create a new User
router.post('/signup', CreateUser)

//Confirm User
router.get('/confirm', ConfirmUser)

//Login User 
router.post('/login', LoginUser)

module.exports = router