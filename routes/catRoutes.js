var  express=require('express')
    var router =express.Router()
    const {disp,ins,edit,del}=require('../controller/catController')
router.get('/', disp);
router.post('/insdata', ins);
router.get('/del/:id', del);
router.get('/edit/:id', edit);

module.exports = router;
