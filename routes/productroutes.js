var express = require('express')
var router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads');  
  },
  filename: function (req, file, cb) {
    const getImgName = file.originalname.split('.');
    const uniqueSuffix = Date.now() + '.' + getImgName[1];
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

const upload = multer({ storage: storage });

const {disp,ins,del,edit,upd}= require('../controller/productcontroller')
router.get('/',disp)
router.post('/update/:id',upd)
router.post('/insdata',upload.single('productImage'),ins)
router.delete('/del/:id',del)
router.get('/edit/:id',edit)

module.exports = router