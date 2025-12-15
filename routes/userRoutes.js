var  express=require('express')
    var router =express.Router()
    const {register,login}=require('../controller/userController')
router.post('/register',register);
router.post('/login',login);

module.exports = router;
